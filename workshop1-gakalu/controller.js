const BankModel=require('./model');

exports.controlAddBank=async(req,res)=>{
const acc=BankModel.addBank(req.body);
return acc;
}
exports.controlAddBankAccount=async(req,res)=>{
    const{bankId,userId}=req.body;
    const account=req.body;
    const acc=await BankModel.addAccount({bankId,userId,account});
    return acc;
    }