exports.get_home = (req, res) =>{
    if(req.error) res.status(200).render('index', {error:1});
    else res.status(200).render('index', {error:0});
}