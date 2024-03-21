const mongoose=require('mongoose')

const BankScchema=mongoose.Schema({

        name:{type:String},
        users:[{
            name:{type:String},
            accounts:[{
                type:{type:String},
                number:{type:Number},
                routing:{type:Number},
                amount:{type:Number}
            }]
        }]
})
const BankModel=mongoose.model('bank',BankScchema);
class BanckAccount{
static async addBank(data){
const bank=new BankModel(data);
await bank.save();
return bank;
}
static async addAccount(bankId,userId,acc){
const bank=await BankModel.findOneAndUpdate(
 {_id:bankId,"users_id":userId},
 {$push:{"users.$.accounts":acc}}
)
return bank;
}
}
module.exports=BanckAccount;
