import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

(async () => {

  const urlRequestReview = `https://api.github.com/repos/${process.env.REPO_NAME}/pulls/${process.env.PR_NUMBER}/requested_reviewers`;

  await axios.post(
    urlRequestReview,
    { reviewers: ["PdrMed"] },
    { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" } }
  );

  const urlApproveReview = `https://api.github.com/repos/${process.env.REPO_NAME}/pulls/${process.env.PR_NUMBER}/reviews`;
  await axios.post(
    urlApproveReview,
    { event: "APPROVE", body: "✅ Testes E2E aprovados! PR aprovado automaticamente." },
    { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" } }
  );
})();