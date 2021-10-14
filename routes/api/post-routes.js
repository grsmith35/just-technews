const router = require('express').Router();
const { Post, User} = require("../../models");

//get all user
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: ['id', 'post_url', 'title', 'created_at'],
      includes: [
          {
              model: User,
              attributes: ['username']
          }
      ]
    })
  
  });