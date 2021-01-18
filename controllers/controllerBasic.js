exports.get_home = (req, res) =>{
    if(req.error) res.status(400).render('error', {error: 400});
    else res.status(200).render('index', {error:0});
}

exports.get_devlog = (req, res) =>{
    if(req.error) res.status(400).render('error', {error:1});
    else res.status(200).render('devlog', {error:1});
}

exports.get_about = (req, res) =>{
    if(req.error) res.status(400).render('error', {error:1});
    else res.status(200).render('about', {error:1});
}