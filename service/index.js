// taski:
// wyszukaniw eszystkich
// wyszukaniw po id
// tworzenie 
// uddate 
// usówanie  
// zmiana faworite

const Contact = require('./schemas/contact')

const getAllContacts = async () => {
    try {
        return await Contact.find()
    } catch (error) {
        console.log(error)
    }
}

const getByIdContact = (id) => {
    return Contact.findOne({ _id: id })
}

const createContacts = (body) => {
    return Contact.create(body)
}

const updateContact = (id, body) => {
    return Contact.findByIdAndUpdate({ _id: id }, body, { new: true })
}

const deleteContact = (id) => {
    return Contact.findByIdAndRemove({ _id: id })
}

const updateStatusContact = (id, favorite) => {
    return Contact.findByIdAndUpdate({ _id: id }, { favorite }, { new: true })
}


module.exports = {
    getAllContacts,
    getByIdContact,
    createContacts,
    updateContact,
    deleteContact,
    updateStatusContact
}