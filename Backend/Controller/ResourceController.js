import Resource from '../Models/Resource.js';
export const getResource = async () => {
    const {category}=req.query;
    try {
        const query=category?{category}:{};
        const resources = await Resource.find(query);
        resources.json(resources);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getResourceById=async()=>{
    try {
        const resource=await Resource.findById(req.params.id)
        if(!resource)
            {
                return res.status(404).json({error:'Resources not found '});
                res.json(resource);
            }
    } catch (error) {
      res.status(500).json({error:error.message});
    }
 
};