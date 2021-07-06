export interface Gifinfo {
  data: Data;
  meta: Meta;
}

export interface Data {
  type:                       string;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     string;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            Date;
  trending_datetime:          Date;
  images:                     Images;
  user?:                       User;
  analytics:                  Analytics;
  analytics_response_payload: string;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
  onstart: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  hd:                       DownsizedSmall;
  downsized_large:          The480_WStill;
  fixed_height_small_still: The480_WStill;
  original:                 FixedHeight;
  fixed_height_downsampled: FixedHeight;
  downsized_still:          The480_WStill;
  fixed_height_still:       The480_WStill;
  downsized_medium:         The480_WStill;
  downsized:                The480_WStill;
  preview_webp:             The480_WStill;
  original_mp4:             DownsizedSmall;
  fixed_height_small:       FixedHeight;
  fixed_height:             FixedHeight;
  downsized_small:          DownsizedSmall;
  preview:                  DownsizedSmall;
  fixed_width_downsampled:  FixedHeight;
  fixed_width_small_still:  The480_WStill;
  fixed_width_small:        FixedHeight;
  original_still:           The480_WStill;
  fixed_width_still:        The480_WStill;
  looping:                  Looping;
  fixed_width:              FixedHeight;
  preview_gif:              The480_WStill;
  "480w_still":             The480_WStill;
}

export interface The480_WStill {
  url:    string;
  width:  string;
  height: string;
  size?:  string;
}

export interface DownsizedSmall {
  height:   string;
  mp4:      string;
  mp4_size: string;
  width:    string;
}

export interface FixedHeight {
  height:    string;
  mp4?:      string;
  mp4_size?: string;
  size:      string;
  url:       string;
  webp:      string;
  webp_size: string;
  width:     string;
  frames?:   string;
  hash?:     string;
}

export interface Looping {
  mp4:      string;
  mp4_size: string;
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  is_verified:   boolean;
  website_url:   string;
  instagram_url: string;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}
