import itemModal from '../modals/itemModal.js';
export const getItemController = async(req,res)=>{
    try {
        const items = await itemModal.find();
        res.status(200).send(items);
    } catch (error) {
            console.log(error);
    }
}
export const addItemController =async(req,res)=>{
    try {
            const newItem = new itemModal(req.body);
            await newItem.save();
            res.status(200).send("item created Successfully");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}


export const getItemByCategoryController=async(req,res)=>{
    try {
        const category = req.params.category;
        console.log(category)
        const items = await itemModal.find({category:category});
        res.status(200).send(items);

    } catch (error) {
        console.log(error);
    }
}

export const editItemController =async(req,res)=>{
    try {
       const item= await itemModal.findOneAndUpdate({_id:req.body.id},req.body.others,{
        new:true
       });
        res.status(200).send(item);

    } catch (error) {
        res.send(400).error(error);
            console.log(error);
    }
}

export const deleteItemController =async(req,res)=>{
    try {
        console.log(req.headers);
        const _id = req.headers.id;
        await itemModal.findOneAndDelete({_id});
        res.status(200).send("Item deleted Successfully");

    } catch (error) {
        res.status(400).json(error);
            console.log(error);
    }
}