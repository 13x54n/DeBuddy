export const orgConfig = {
  orgCredentials: {
    secretKey: process.env.NILLION_SECRET_KEY,
    orgDid: process.env.NILLION_ORG_DID,
  },
  nodes: [
    {
      url: "https://nildb-zy8u.nillion.network",
      did: "did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u",
    },
    {
      url: "https://nildb-rl5g.nillion.network",
      did: "did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g",
    },
    {
      url: "https://nildb-lpjp.nillion.network",
      did: "did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp",
    },
  ],
};

// Your Credentials:
// DID: did:nil:testnet:nillion1hk39wc7tp9055m7ur4ujq9fga6fvjy4cyu70c2
// Public Key: 02cf921c6d884119fab46b51bae0d22f60bf2a66fed46f2174ec1d3d12d1931411
// Secret Key: 216f054fdedb088aa1b7d73ca3f5b70241d75e819b4ecef8b6acb0f8c34990e0

// Cluster Config:

// nildb-zy8u:
// URL: https://nildb-zy8u.nillion.network
// DID: did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u
// Public Key: 037a2183c3f786a3505470aa4169f50f1d267b816dc596b26405a539f2aa579469
// API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/

// nildb-rl5g:
// URL: https://nildb-rl5g.nillion.network
// DID: did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g
// Public Key: 037782d481c4f119c88e5fc2cd17b3ca13ea7383992d09857e9ee43b51cd7f5a18
// API docs: https://nildb-rl5g.nillion.network/api/v1/openapi/docs/

// nildb-lpjp:
// URL: https://nildb-lpjp.nillion.network
// DID: did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp
// Public Key: 03fda649d577a9a28d6486f9dcaa839a4719b99364348e2815280f74df4ec62894
// API docs: https://nildb-lpjp.nillion.network/api/v1/openapi/docs/
