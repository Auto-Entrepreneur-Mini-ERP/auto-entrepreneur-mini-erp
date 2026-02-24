// import { Router } from "express";
// import { ContributionController } from "./contribution.controller.js";

// const router = Router();

// router.get('/contributions', ContributionController.getAllContributions);
// router.get('/contributions/:id', ContributionController.getOneContribution);
// router.post('/contributions', ContributionController.createContribution);
// router.patch('/contributions/:id', ContributionController.modifyContributionStatus);

// export default router;
import { Router } from "express";
import { ContributionController } from "./contribution.controller.js";

const router = Router();

 
router.get("/contributions", ContributionController.getAllContributions);
router.get(
  "/contributions/:contributionId",
  ContributionController.getOneContribution,
);
router.post("/contributions", ContributionController.createContribution);
router.patch(
  "/contributions/:contributionId",
  ContributionController.modifyContributionStatus,
);

export default router;