function checkPassword(password, confirmPassword){
    let errors = []
    if(password.length < 8){
        return errors.push('Password length is too short')
    }
    if(password !== confirmPassword){
        return errors.push('Passwords do not match')
    }
}
