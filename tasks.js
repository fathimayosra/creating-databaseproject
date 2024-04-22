Router.get('/get_all', (req,res)=>{
    Task.findAll({}).then((result)=>{
        if(result.length ==0){return res.status(404).json({message: 'no tasks'})}
        else {return res.status(200).json({message:'success', tasks:result});}
    }).catch((err)=>{return res.status(500);});
    });

    Router.post('/add_task', (req,res)=>{
        Task.create({title: req.body.title,
            description: req.body.description,
            date:req.body.date,
            time: req.body.time,
            priority_level: req.body.priority_level,
            category: req.body.category,
            progress_level:req.body.progress_level}).
            then((task)=>{return res.status(200).json({message:'task has been succesfully added', task: task})})
            .catch((err)=>{return res.status(500);});
        });


        router.get('/get-priority/:priority',(req,res)=>{
            Task.findAll({where: {priority_level: req.params.priority}}).then((result)=>{
                if (result.length ==0) {return res.status(404).json({message:'no tasks'})}
                else{ return res.status(200).json({message:'success',tasks: result});}
            }).catch((err)=>{return res.status(500);});

                
            });
        

        module.exports =router;

