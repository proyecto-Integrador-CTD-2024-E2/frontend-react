[1mdiff --git a/index.html b/index.html[m
[1mindex 52bc74f..8dcdf51 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -1,4 +1,4 @@[m
[31m-<!DOCTYPE html>[m
[32m+[m[32m<!doctype html>[m
 <html lang="en">[m
   <head>[m
     <meta charset="UTF-8" />[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 3818b57..e132ae4 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -12,20 +12,16 @@[m
         "bootstrap": "^5.3.2",[m
         "react": "^18.2.0",[m
         "react-dom": "^18.2.0",[m
[31m-        "react-router-dom": "^6.22.0",[m
[31m-        "sonner": "^1.4.1"[m
[32m+[m[32m        "react-router-dom": "^6.22.0"[m
       },[m
       "devDependencies": {[m
         "@types/react": "^18.2.55",[m
         "@types/react-dom": "^18.2.19",[m
         "@vitejs/plugin-react": "^4.2.1",[m
[31m-        "autoprefixer": "^10.4.18",[m
         "eslint": "^8.56.0",[m
         "eslint-plugin-react": "^7.33.2",[m
         "eslint-plugin-react-hooks": "^4.6.0",[m
         "eslint-plugin-react-refresh": "^0.4.5",[m
[31m-        "postcss": "^8.4.35",[m
[31m-        "tailwindcss": "^3.4.1",[m
         "vite": "^5.1.2"[m
       }[m
     },[m
[36m@@ -38,18 +34,6 @@[m
         "node": ">=0.10.0"[m
       }[m
     },[m
[31m-    "node_modules/@alloc/quick-lru": {[m
[31m-      "version": "5.2.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",[m
[31m-      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",[m
[31m-      "dev": true,[m
[31m-      "engines": {[m
[31m-        "node": ">=10"[m
[31m-      },[m
[31m-      "funding": {[m
[31m-        "url": "https://github.com/sponsors/sindresorhus"[m
[31m-      }[m
[31m-    },[m
     "node_modules/@ampproject/remapping": {[m
       "version": "2.2.1",[m
       "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",[m
[36m@@ -862,50 +846,6 @@[m
       "integrity": "sha512-6EwiSjwWYP7pTckG6I5eyFANjPhmPjUX9JRLUSfNPC7FX7zK9gyZAfUEaECL6ALTpGX5AjnBq3C9XmVWPitNpw==",[m
       "dev": true[m
     },[m
[31m-    "node_modules/@isaacs/cliui": {[m
[31m-      "version": "8.0.2",[m
[31m-      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",[m
[31m-      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",[m
[31m-      "dev": true,[m
[31m-      "dependencies": {[m
[31m-        "string-width": "^5.1.2",[m
[31m-        "string-width-cjs": "npm:string-width@^4.2.0",[m
[31m-        "strip-ansi": "^7.0.1",[m
[31m-        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",[m
[31m-        "wrap-ansi": "^8.1.0",[m
[31m-        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=12"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {[m
[31m-      "version": "6.0.1",[m
[31m-      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",[m
[31m-      "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",[m
[31m-      "dev": true,[m
[31m-      "engines": {[m
[31m-        "node": ">=12"[m
[31m-      },[m
[31m-      "funding": {[m
[31m-        "url": "https://github.com/chalk/ansi-regex?sponsor=1"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {[m
[31m-      "version": "7.1.0",[m
[31m-      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",[m
[31m-      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",[m
[31m-      "dev": true,[m
[31m-      "dependencies": {[m
[31m-        "ansi-regex": "^6.0.1"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=12"[m
[31m-      },[m
[31m-      "funding": {[m
[31m-        "url": "https://github.com/chalk/strip-ansi?sponsor=1"[m
[31m-      }[m
[31m-    },[m
     "node_modules/@jridgewell/gen-mapping": {[m
       "version": "0.3.3",[m
       "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.3.tgz",[m
[36m@@ -989,16 +929,6 @@[m
         "node": ">= 8"[m
       }[m
     },[m
[31m-    "node_modules/@pkgjs/parseargs": {[m
[31m-      "version": "0.11.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",[m
[31m-      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",[m
[31m-      "dev": true,[m
[31m-      "optional": true,[m
[31m-      "engines": {[m
[31m-        "node": ">=14"[m
[31m-      }[m
[31m-    },[m
     "node_modules/@popperjs/core": {[m
       "version": "2.11.8",[m
       "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",[m
[36m@@ -1353,31 +1283,6 @@[m
         "node": ">=4"[m
       }[m
     },[m
[31m-    "node_modules/any-promise": {[m
[31m-      "version": "1.3.0",[m
[31m-      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",[m
[31m-      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",[m
[31m-      "dev": true[m
[31m-    },[m
[31m-    "node_modules/anymatch": {[m
[31m-      "version": "3.1.3",[m
[31m-      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",[m
[31m-      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",[m
[31m-      "dev": true,[m
[31m-      "dependencies": {[m
[31m-        "normalize-path": "^3.0.0",[m
[31m-        "picomatch": "^2.0.4"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">= 8"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/arg": {[m
[31m-      "version": "5.0.2",[m
[31m-      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",[m
[31m-      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",[m
[31m-      "dev": true[m
[31m-    },[m
     "node_modules/argparse": {[m
       "version": "2.0.1",[m
       "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",[m
[36m@@ -1499,43 +1404,6 @@[m
         "has-symbols": "^1.0.3"[m
       }[m
     },[m
[31m-    "node_modules/autoprefixer": {[m
[31m-      "version": "10.4.18",[m
[31m-      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.18.tgz",[m
[31m-      "integrity": "sha512-1DKbDfsr6KUElM6wg+0zRNkB/Q7WcKYAaK+pzXn+Xqmszm/5Xa9coeNdtP88Vi+dPzZnMjhge8GIV49ZQkDa+g==",[m
[31m-      "dev": true,[m
[31m-      "funding": [[m
[31m-        {[m
[31m-          "type": "opencollective",[m
[31m-          "url": "https://opencollective.com/postcss/"[m
[31m-        },[m
[31m-        {[m
[31m-          "type": "tidelift",[m
[31m-          "url": "https://tidelift.com/funding/github/npm/autoprefixer"[m
[31m-        },[m
[31m-        {[m
[31m-          "type": "github",[m
[31m-          "url": "https://github.com/sponsors/ai"[m
[31m-        }[m
[31m-      ],[m
[31m-      "dependencies": {[m
[31m-        "browserslist": "^4.23.0",[m
[31m-        "caniuse-lite": "^1.0.30001591",[m
[31m-        "fraction.js": "^4.3.7",[m
[31m-        "normalize-range": "^0.1.2",[m
[31m-        "picocolors": "^1.0.0",[m
[31m-        "postcss-value-parser": "^4.2.0"[m
[31m-      },[m
[31m-      "bin": {[m
[31m-        "autoprefixer": "bin/autoprefixer"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": "^10 || ^12 || >=14"[m
[31m-      },[m
[31m-      "peerDependencies": {[m
[31m-        "postcss": "^8.1.0"[m
[31m-      }[m
[31m-    },[m
     "node_modules/available-typed-arrays": {[m
       "version": "1.0.6",[m
       "resolved": "https://registry.npmjs.org/available-typed-arrays/-/a