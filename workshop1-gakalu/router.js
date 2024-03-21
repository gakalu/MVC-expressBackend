const express=require('express')
const bankController=require('./controller');
const router=express.Router();
router.post('/add',bankController.controlAddBank)
router.post('./:bankId/users/:userId',bankController.controlAddBankAccount)
module.exports=router;