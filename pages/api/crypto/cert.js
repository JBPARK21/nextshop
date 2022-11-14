import forge from 'node-forge';
const pki = forge.pki;
const caCertPem = process.env.CA_CERT;
const caPrivateKeyPem = process.env.CA_PRIVATE;
const caCert = pki.certificateFromPem(caCertPem);
const caPrivateKey = pki.privateKeyFromPem(caPrivateKeyPem);
export default function handler(req, res) {
  const serial = req.body.serial;
  const cn = req.body.cn;
  const country = req.body.country;
  const state = req.body.state;
  const locality = req.body.locality;
  const org = req.body.org;
  const orgUnit = req.body.orgUnit;
  const publicKeyPem = req.body.publicKeyPem;
  const publicKey = pki.publicKeyFromPem(publicKeyPem);
}
