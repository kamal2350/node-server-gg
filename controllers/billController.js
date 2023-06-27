import billModal from '../modals/billSchema.js';


// add a bill
export const addBillController =async(req,res)=>{
    try {
        const bill = new billModal(req.body);
        await bill.save();
        res.status(200).json("Bill Created Successfully");
    } catch (error) {
        res.status(400).send(error);
    }
}

// get All Bills
export const getAllBills=async(req,res)=>{
    try {
        const bills = await billModal.find().sort({date:-1});
        res.status(200).send(bills);
    } catch (error) {
        res.status(400).json(error);
    }
}

