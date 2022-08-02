# AUTH from scratch

# Terms

## Authentication

    - Who are you?
    - Signining In / Signing Out / Verifying Passwords

## Authorization

    - Who can see what
    - Permissions / Access what

# Authentication

- Form Based (email/ password stored in DB)

# OAuth (Login With Facebook, Twitter, Google...)

# Single Sign-On (One Login, Enterprise Systems)

MD5 is an old hashing algorithm, that generates the same hashed output for a certain string
but with bcrypt different hashed outputs everytime it's hashed, so more secure

# Salting in hashing

- means when you encrypt a password you add a random thing + the password and you hash them both
  then you can separate the password from the random thing generated and know the password, more secure
