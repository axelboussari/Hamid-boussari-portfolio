import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
String hashed = encoder.encode("motDePasseUtilisateur");

// Vérification lors de l’authentification
boolean match =
encoder.matches("motDePasseUtilisateur", hashed);
