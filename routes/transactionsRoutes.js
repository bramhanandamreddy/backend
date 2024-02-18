const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");

router.get("/initialize-database", transactionsController.initializeDatabase);

router.get("/transactions", transactionsController.listTransactions);

router.get("/statistics", transactionsController.getStatistics);

router.get("/bar-chart", transactionsController.generateBarChart);

router.get("/pie-chart", transactionsController.generatePieChart);

module.exports = router;
