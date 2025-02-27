﻿using Domain.IRepository;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CryptoHubAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class LikeController : Controller
    {
        private readonly ILikeRepository _likeRepository;

        public LikeController(ILikeRepository likeRepository)
        {
            _likeRepository = likeRepository;
        }

        [HttpGet]
        // GET: LikeController
        public async Task<ActionResult<List<Like>>> GetAllLikes()
        {
            return Ok(await _likeRepository.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Like>>> GetLikeByUserId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.UserId == id);
            if (response == null)
                return NotFound();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Like>>> GetLikeByPostId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.PostId == id);
            if (response == null)
                return NotFound();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLikeCountByPostId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.PostId == id);
            if (response == null)
                return NotFound();

            return Ok(new { Count = response.Count() });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Like>>> GetLikeByCommentId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.CommentId == id);
            if (response == null)
                return NotFound();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLikeCountByCommentId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.CommentId == id);
            if (response == null)
                return NotFound();

            return Ok(new { Count = response.Count() });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Like>>> GetLikeByReplyId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.ReplyId == id);
            if (response == null)
                return NotFound();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLikeCountByReplyId(int id)
        {
            var response = await _likeRepository.FindRange(l => l.ReplyId == id);
            if (response == null)
                return NotFound();

            return Ok(new { Count = response.Count() });
        }

        [HttpGet("{userId}/{postId}")]
        public async Task<ActionResult<Like>> GetLikeBy(int userId, int postId)
        {
            var response = await _likeRepository.FindRange(p => p.UserId == userId && p.PostId == postId);
            if (response == null)
                return NotFound(null);

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Like>> AddLike([FromBody] Like like)
        {
            var likes = await _likeRepository.FindOne(l => l.UserId == like.UserId
            && l.ReplyId == like.ReplyId
            && l.CommentId == like.CommentId
            && l.PostId == like.PostId
            );

            if (likes != null)
                return BadRequest();

            return Ok(await _likeRepository.Add(like));
        }

        [HttpPut]
        public async Task<ActionResult<Like>> UpdateLike([FromBody] Like like)
        {
            var response = await _likeRepository.Update(u => u.LikeId == like.LikeId, like);
            if (response == null)
                return null;

            return Ok(response);
        }

        [HttpDelete("{userId}/{postId}")]
        public async Task<IActionResult> Delete(int userId,int postId)
        {
            
            
            await _likeRepository.DeleteOne(u => u.UserId == userId && u.PostId == postId);
            return Ok();
        }
    }
}
