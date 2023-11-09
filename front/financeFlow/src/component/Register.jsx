import React, { useEffect, useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (authenticated) {
      //todo Rediriger l'utilisateur après authentification.
    }
  }, [authenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target); // Récupère le formulaire en utilisant l'objet Form.

    try {
      // todo: changer fetch par Axios
      const response = await fetch('../../../back/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, repass }),
      });

      //   method: 'POST',
      //   body: formData,
      // });

      console.log({ email, password, repass });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // todo: ajout de validation des inputs & verification de l'existance de l'email dans la base de données coté back

          setAuthenticated(true);
          setMessage('Authentification réussie !');
        } else {
          setMessage(
            'Authentification échouée. Veuillez vérifier vos informations.'
          );
        }
      } else {
        setMessage('Erreur de connexion au serveur HHH.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Erreur de connexion au serveur.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="repass"
          placeholder="confirmer Mot de passe"
          value={repass}
          onChange={(e) => setRepass(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;
