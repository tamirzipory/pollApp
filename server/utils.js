export const isAuth = (req, res, next) =>{
    const key = req.headers.key;
    if(!key){
        return res.status(401).send('no key');
    }
    if(key !== process.env.apiKey){
       return res.status(403).send('invalid token');
    }
    next();
}