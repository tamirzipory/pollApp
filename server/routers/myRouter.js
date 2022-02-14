import express from 'express';
import Poll from '../models/Poll.js';
import { isAuth } from '../utils.js';

const app = express();
app.use(express.urlencoded({extended: true}));

const router = express.Router();

router.get('/', async(req, res) => {
    try{
    const polls = await Poll.find({});
    return res.json(polls)
    }
    catch(err){
        return res.status(500).send(message.err)
    }
})

router.post('/add-poll', isAuth, async(req, res) =>{
    try{
    let data = req.body.options;
    data = data.map((str) =>(
               {
                  option: str,
                  votes: 0 
               }
           ));
    
    console.log(data)
    const poll = new Poll({
        title:req.body.title,
        options: data
    })
    const pollSave = await poll.save();
    return res.status(200).json(pollSave);
}
catch(err){
    console.log(err);
    return res.status(500).send(err.message)
}
});


router.put('/:id/vote/:index', async(req, res) => {
    const id = req.params.id;
    const index = req.params.index;
9 
    try{
    const poll = await Poll.findById(id);
    const arrOptions = poll.options;
    if(arrOptions.length <= index){
        return res.status(404).send('invalid index')
    }
    poll.options[index].votes = poll.options[index].votes+1
    const ret = await poll.save();
    res.status(200).send(ret)
}
catch(err){
    res.status(500).send(err.message)
}


})

export default router;