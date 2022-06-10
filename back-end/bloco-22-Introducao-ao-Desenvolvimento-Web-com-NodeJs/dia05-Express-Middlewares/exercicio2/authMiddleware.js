const validateProductName = (req, res, next) => {
    const { productName } = req.body;
    if(!productName) return res.status(400).json({message: 'O campo productName é obrigatório'});
    if(productName.length < 4) return res.status(400).json({message: 'O campo productName deve ter pelo menos 4 caracteres'});

    next();
}

const validateInfos = (req, res, next) => {
    const { infos } = req.body;
    if(!infos) return res.status(400).json({message: 'O campo infos é obrigatório'});
    
    next();
}

const validateSaleDate = (req, res, next) => {
    const { infos: {saleDate} } = req.body;
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
    if(!saleDate) return res.status(400).json({message: 'Campo saleDate é obrigatório'});
    if(!dateRegex.test(saleDate)) return res.status(400).json({message: 'O campo saleDate não é uma data válida'});
    
    next();
}

const validateWarrentyPeriod = (req, res, next) => {
    const { infos: { warrantyPeriod } } = req.body;
    if(!warrantyPeriod) return res.status(400).json({message: 'Campo warrentyPeriod é obrigatório'});
    if(!(warrantyPeriod >=1 && warrantyPeriod <=3)) return res.status(400).json({message: 'O campo warrentyPeriod precisa estar entre 1 e 3'});

    next();
}

const validateSignup = (req, res, next) => {
    const { email, password, firstName, phone } = req.body;
    if(!email || !password || !firstName || !phone) return res.status(401).json({message: 'missing fields'});

    next();
}

const validateUser = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if(!authorization || authorization.length < 16) return res.status(401).json({message: 'Token inválido'});    
        return next();
    } catch(error) {
        return res.status(500).end();
    }
}

module.exports = {
    validateProductName,
    validateInfos,
    validateSaleDate,
    validateWarrentyPeriod,
    validateSignup,
    validateUser
}