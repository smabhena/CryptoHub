﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Domain.Models
{
    public partial class Image
    {
        public Image()
        {
            Coins = new HashSet<Coin>();
            Posts = new HashSet<Post>();
            Users = new HashSet<User>();
        }

        public int ImageId { get; set; }
        public byte[] Image1 { get; set; } = null!;

        [JsonIgnore]
        public virtual ICollection<Coin>? Coins { get; set; }

        [JsonIgnore]
        public virtual ICollection<Post>? Posts { get; set; }

        [JsonIgnore]
        public virtual ICollection<User>? Users { get; set; }
    }
}
