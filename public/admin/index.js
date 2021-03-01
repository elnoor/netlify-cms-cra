import CMS from "netlify-cms-app";
import { Post } from "../../src/pages/BlogPosts.js";

// CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("blog", Post);
CMS.init();
