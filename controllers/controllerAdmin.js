exports.get_indexDB = (req, res) =>{
    if(req.error) res.status(400).render('error', {error: 400});
    else res.status(200).render('indexDB', {error:0});
}
exports.get_login = (req, res) =>{
    if(req.error) res.status(400).render('error', {error: 400});
    else res.status(200).render('login', {error:0});
}
exports.get_creaPost = (req, res) =>{
    if(req.error) res.status(400).render('error', {error: 400});
    else res.status(200).render('creaPost', {error:0});
}
exports.get_modificaPost = (req, res) =>{
    if(req.error) res.status(400).render('error', {error: 400});
    else res.status(200).render('modificaPost', {error:0});
}