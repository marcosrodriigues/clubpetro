module.exports = {
    validate(person) {
        if (person == undefined || person == null) return { message : "Object not found", status: false }
        if (!person) return { message : "Cliente or Frentista not found", status: false };
        if (!person.cpf) return { message : "CPF not found", status: false };
        return { status : true };
    }
}

