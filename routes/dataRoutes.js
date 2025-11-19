const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// GET all data
router.get('/data', async (req, res) => {
  try {
    const data = await Data.find().select('kode nama ibukota path -_id');
    res.json({
      success: true,
      count: data.length,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching data',
      error: error.message
    });
  }
});

// GET data by ID
router.get('/data/:id', async (req, res) => {
  try {
    const data = await Data.findOne({ kode: req.params.id }).select('kode nama ibukota path');
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Data not found'
      });
    }
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching data',
      error: error.message
    });
  }
});

// GET data by kode
router.get('/data/kode/:kode', async (req, res) => {
  try {
    const data = await Data.findOne({ kode: req.params.kode }).select('kode nama ibukota path');
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Data not found'
      });
    }
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching data',
      error: error.message
    });
  }
});

// POST - Create new data
router.post('/data', async (req, res) => {
  try {
    const { kode, nama, ibukota, path } = req.body;
    
    const newData = new Data({
      kode,
      nama,
      ibukota,
      path
    });
    
    const savedData = await newData.save();
    
    res.status(201).json({
      success: true,
      message: 'Data created successfully',
      data: savedData
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating data',
      error: error.message
    });
  }
});

module.exports = router;
