module.exports = {
    async validateJsonInfo(obj, service) {
        var object_db = await service.findByCpf(obj.cpf);
        if (!object_db) {
            object_db = await service.store(obj);
        }
        return object_db;
    }
}