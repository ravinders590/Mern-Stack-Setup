exports.getTest = async (req,res)=>{
    res.status(200).json({
        message:"Test Api is working..."
    })
}

exports.student = function(req,res){
    res.status(200).json({
        id:1,
        name:'Ravinder',
        qualification:'B.TECH'
    })
}
exports.student1 = (req,res)=>{
    res.status(200).json({
        id:1,
        name:'Ravinder singh',
        qualification:'B.TECH'
    })
}