const {
    getAllContacts,
    getByIdContact,
    createContacts,
    updateContact,
    deleteContact,
    updateStatusContact
  } = require('./../service/index'); 
  
  const getContacts = async (req, res, next) => {
    try {
      const results = await getAllContacts()
      res.status(200).json(results)
    } catch (error) {
      console.error(error);
      next(error)
    }
  };
  
  const getContactById = async (req, res, next) => {
    const { contactId } = req.params;
    
    try {
      const result = await getByIdContact(contactId);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          status: 'error',
          code: 404,
          message: `Not found task id: ${contactId}`,
          data: 'Not Found',
        });
      }
    } catch (e) {
      console.error(e);
      next(e);
    }
  };

  const addContacts = async (req, res, next) => {
    try {
      const contact = await createContacts(req.body)
  
      res.status(201).json(contact)
    } catch (error) {
      next(error)
    }
  }; 

  const removeContact = async (req, res, next) => {
    try {
      const result = await deleteContact(req.params.contactId)
  
      if (!result) {
        return res.status(404).json({ message: 'Not found' })
      }
  
      res.status(200).json({ message: 'contact deleted' })
    } catch (error) {
      next(error)
    }
  }; 
  
  
  
  const patchContact = async (req, res, next) => {
    try {
      const contact = await updateContact(req.params.contactId, req.body)
  
      if (!contact) {
        return res.status(404).json({ message: 'Not found' })
      }
  
      res.status(200).json(contact)
    } catch (error) {
      next(error)
    }
  }; 
  
  const changeStatusContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { favorite } = req.body;
  
      if (favorite === undefined) {
        return res.status(400).json({ message: 'missing field favorite' });
      }
  
      const updatedContact = await updateStatusContact(contactId, favorite);
  
      if (!updatedContact) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.status(200).json(updatedContact);
    } catch (error) {
      next(error);
    }
  }; 
  
  module.exports = {
      getContacts,
      getContactById,
      addContacts,
      removeContact,
      patchContact,
      changeStatusContact,
      
  }