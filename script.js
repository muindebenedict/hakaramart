document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    const state = {
        products: {
            // Master list of all products
            featured: [
                { id: 1, name: "Smart Watch Series 5", price: 12999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 4.5, reviews: 128 },
                { id: 2, name: "Macbook Pro", price: 89999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "computers", rating: 4.0, reviews: 76 },
                { id: 3, name: "Wireless Headphones", price: 8499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 5.0, reviews: 215 },
                { id: 4, name: "iPhone XR", price: 30999, image: "https://imgs.search.brave.com/EKMk2AdjcgP3wn8HWP94VkdR2WHIDUO4TCMXi9oKshQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXku/Z2F6ZWxsZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvaVBob25lX1hS/Xy1fUmVkXy1fT3Zl/cmxhcF9UcmFucy1j/cm9wcGVkLmpwZz92/PTE3NTcwMTk1NjIm/d2lkdGg9NTMz", category: "electronics", rating: 4.5, reviews: 142 },
                { id: 5, name: "Sony Headphones", price: 9999, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 4.5, reviews: 87 },
                { id: 6, name: "Philips Camera 4K", price: 39999, image: "https://imgs.search.brave.com/U0g2BT3AGaSlVbz_lCb3dT6WIHB1E4RLNbZARB_tuBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzLzA5NjM5/YzNmLTY2ZGUtNDJh/MC1hNmE2LTgzZThm/MWZiMGQ3NS9zdm4v/YmxhY2steWljaHVo/YW94aS1kaWdpdGFs/LWNhbWVyYXMtYWNj/ZXNzb3JpZXMtMDEz/MjdmcGgwNTYtNjRf/NjAwLmpwZw", category: "electronics", rating: 4.0, reviews: 42 },
                { id: 7, name: "Wireless Gamepad", price: 4999, image: "https://imgs.search.brave.com/4B85FW2mkhMa4gJbl3PxG3CyANGBuXJ72myfPxvhpac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy5t/YXhnYW1pbmcuY29t/L2JpbGRlci9hcnRp/a2xhci9saXRlbi8z/MDMwMV9TLmpwZz9t/PTE3MDk5MDkyOTM", category: "electronics", rating: 5.0, reviews: 156 },
                { id: 8, name: "iPhone X", price: 27999, image: "https://i.ebayimg.com/images/g/8~wAAOSw4zBnswU~/s-l960.webp", category: "phones", rating: 4.5, reviews: 98 }
            ],
            deals: [
                { id: 9, name: "HP Dragonfly Pro", price: 55999, originalPrice: 64999, image: "https://imgs.search.brave.com/pjIp5j9IHKG4JR6W6YBIe6kwmgaUSJJ5X8KFsODYHHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjQ1MTEx/MDkvMjM2NTc2X0hQ/X0RyYWdvbmZseV9Q/cm9fQUtyYWxlc18w/XzE1Ni5qcGc_cXVh/bGl0eT05MCZzdHJp/cD1hbGwmY3JvcD0w/LDAsMTAwLDEwMCZ3/PTI0MDA", category: "electronics", rating: 5.0, reviews: 89 },
                { id: 10, name: "55 Samsung Smart TV 8K", price: 90999, originalPrice: 109999, image: "https://imgs.search.brave.com/d7rr4fiMcQdGy8mD9FfGFpf1ZSSFdeNG9A2wPV739fQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJvbmlxdWVoaWZp/LmNhL2Nkbi9zaG9w/L2ZpbGVzLzY2ODgz/NF8xM184MDB4Lmpw/Zz92PTE3Mzg5Njg2/NzY", category: "electronics", rating: 4.5, reviews: 124 },
                { id: 11, name: "LV Designer Jacket", price: 80999, originalPrice: 99999, image: "https://imgs.search.brave.com/GcFqlEgngRzC2-CfbexkfnBjjdcWXvCn016VJ06xRKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIwLzQ0/LzcxLzIwNDQ3MTEw/MWJlZjliYzZlM2Uz/YzA4ZmY2N2ZhNDZl/LmpwZw", category: "fashion", rating: 4.0, reviews: 67 },
                { id: 12, name: "BOSE Bluetooth Speaker", price: 23999, originalPrice: 30999, image: "https://imgs.search.brave.com/v2f5KeJHruj9vUpTeQq8UAhQkZxcSv8lWLmUlJrudg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF3ZTVFMTA3S0wu/anBn", category: "electronics", rating: 4.5, reviews: 93 },
                { id: 13, name: "Kitchen Mixer", price: 12999, originalPrice: 15999, image: "https://imgs.search.brave.com/ZZ0-vpGGIJntzZ-AXMg1fTPrW21clVZMkS5cR8qx4dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxaGRtRVNBRytM/LmpwZw", category: "home", rating: 4.0, reviews: 54 },
                { id: 14, name: "Galaxy Watch 8", price: 50999, originalPrice: 60999, image: "https://imgs.search.brave.com/PLGEEBWnLgY5hNrzmsd1trrffZDPYEaw_v-Jl1fwab8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L3Byb2R1/Y3QvMDZjd1o3dUhB/YWpGSjJhUDByOE5q/a3IvaGVyby1pbWFn/ZS5maWxsLnNpemVf/YXV0b3hhdXRvLnYx/NzUzNDY4NDkxLmpw/Zw", category: "sports", rating: 4.5, reviews: 112 },
                { id: 15, name: "Baby Stroller", price: 15999, originalPrice: 19999, image: "https://imgs.search.brave.com/7BPNO7Z_oNByN8IAhLkL4OhZEUc07pQVDYWy6cMHv9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYWJ5/LXN0cm9sbGVyLXdo/aXRlLTQwNDk1NTk0/LmpwZw", category: "baby", rating: 4.0, reviews: 78 },
                { id: 16, name: "Coffee Machine", price: 8999, originalPrice: 11999, image: "https://imgs.search.brave.com/c6oFqMbKYiCX6N_YQoMSGO3mkdlaBhKi7IpXHG4vpEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI0/OTA4MjQ5L3Bob3Rv/L2NvZmZlZS1ibGVu/ZGVyLWFuZC1ib2ls/ZXItbWFjaGluZS1p/bi1raXRjaGVuLWlu/dGVyaW9yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0wSldF/dWN0b3NocnZPai10/UkFDYkxxWkg1d2lj/ZFQ5eE9DZTd6ZUVV/TFlzPQ", category: "home", rating: 4.5, reviews: 145 },
            ],
            all: [
                // Electronics
                { id: 1, name: "Smart Watch Series 5", price: 12999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 4.5, reviews: 128 },
                { id: 3, name: "Wireless Headphones", price: 8499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 5.0, reviews: 215 },
                { id: 4, name: "iPhone XR", price: 30999, image: "https://imgs.search.brave.com/EKMk2AdjcgP3wn8HWP94VkdR2WHIDUO4TCMXi9oKshQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXku/Z2F6ZWxsZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvaVBob25lX1hS/Xy1fUmVkXy1fT3Zl/cmxhcF9UcmFucy1j/cm9wcGVkLmpwZz92/PTE3NTcwMTk1NjIm/d2lkdGg9NTMz", category: "electronics", rating: 4.5, reviews: 142 },
                { id: 5, name: "Sony Headphones", price: 9999, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 4.5, reviews: 87 },
                { id: 6, name: "Philips Camera 4K", price: 39999, image: "https://imgs.search.brave.com/U0g2BT3AGaSlVbz_lCb3dT6WIHB1E4RLNbZARB_tuBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzLzA5NjM5/YzNmLTY2ZGUtNDJh/MC1hNmE2LTgzZThm/MWZiMGQ3NS9zdm4v/YmxhY2steWljaHVo/YW94aS1kaWdpdGFs/LWNhbWVyYXMtYWNj/ZXNzb3JpZXMtMDEz/MjdmcGgwNTYtNjRf/NjAwLmpwZw", category: "electronics", rating: 4.0, reviews: 42 },
                { id: 7, name: "Wireless Gamepad", price: 4999, image: "https://imgs.search.brave.com/4B85FW2mkhMa4gJbl3PxG3CyANGBuXJ72myfPxvhpac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy5t/YXhnYW1pbmcuY29t/L2JpbGRlci9hcnRp/a2xhci9saXRlbi8z/MDMwMV9TLmpwZz9t/PTE3MDk5MDkyOTM", category: "electronics", rating: 5.0, reviews: 156 },
                { id: 9, name: "HP Dragonfly Pro", price: 55999, originalPrice: 64999, image: "https://imgs.search.brave.com/pjIp5j9IHKG4JR6W6YBIe6kwmgaUSJJ5X8KFsODYHHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjQ1MTEx/MDkvMjM2NTc2X0hQ/X0RyYWdvbmZseV9Q/cm9fQUtyYWxlc18w/XzE1Ni5qcGc_cXVh/bGl0eT05MCZzdHJp/cD1hbGwmY3JvcD0w/LDAsMTAwLDEwMCZ3/PTI0MDA", category: "electronics", rating: 5.0, reviews: 89 },
                { id: 10, name: "55 Samsung Smart TV 8K", price: 90999, originalPrice: 109999, image: "https://imgs.search.brave.com/d7rr4fiMcQdGy8mD9FfGFpf1ZSSFdeNG9A2wPV739fQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJvbmlxdWVoaWZp/LmNhL2Nkbi9zaG9w/L2ZpbGVzLzY2ODgz/NF8xM184MDB4Lmpw/Zz92PTE3Mzg5Njg2/NzY", category: "electronics", rating: 4.5, reviews: 124 },
                { id: 12, name: "BOSE Bluetooth Speaker", price: 23999, originalPrice: 30999, image: "https://imgs.search.brave.com/v2f5KeJHruj9vUpTeQq8UAhQkZxcSv8lWLmUlJrudg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF3ZTVFMTA3S0wu/anBn", category: "electronics", rating: 4.5, reviews: 93 },
                { id: 19, name: "iPad Pro", price: 34999, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "electronics", rating: 4.0, reviews: 76 },
                
                // Computers
                { id: 2, name: "Macbook Pro", price: 89999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "computers", rating: 4.0, reviews: 76 },
                { id: 20, name: "Lenovo Legion Pro", price: 129999, image: "https://imgs.search.brave.com/3dAKlf5WCmyJRVH4ZiepIZ0NxnigYyrbXr8QuZk2QwI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzZE/WVFhcFZFZFlwZkc1/MmV5ZWQ2WUIuanBn", category: "computers", rating: 4.5, reviews: 54 },
                { id: 21, name: "Samsung Tab S10+", price: 185999, image: "https://imgs.search.brave.com/m7LGGwYM1l6ePNtkJ2knHdus8yipoRGX4NEfwPXN6cM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMSG1ob1UtY0wu/anBn", category: "computers", rating: 4.0, reviews: 32 },
                { id: 22, name: "Hp Spectre x360", price: 199999, image: "https://imgs.search.brave.com/idTdAvsvmATiRfgyeF4Xik9FnMmUrtGIibCqlQAboEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zc2wt/cHJvZHVjdC1pbWFn/ZXMud3d3OC1ocC5j/b20vZGlnbWVkaWFs/aWIvcHJvZGltZy9s/b3dyZXMvYzA1NzM3/MzY3LnBuZw", category: "computers", rating: 4.5, reviews: 67 },
                { id: 23, name: "Lenovo X1 Carbon", price: 24999, image: "https://imgs.search.brave.com/aSFiuAEYxUiWn3bvBmy16i1mItMR9u6iLalG5E_Bwuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY1/OGZkOTJmMGNiYTZj/MWY3OGUyYzIzZC8x/NzAzOTI2MTM2NzQ0/LTY1TEFPWVVOSUJT/MFFNQlc3OU1WL2xl/bm92by1jYXJib24t/eDEucG5n", category: "computers", rating: 4.0, reviews: 43 },
                { id: 24, name: "Gaming Mouse", price: 6999, image: "https://imgs.search.brave.com/e_SEYWCnFNWfI0qqYLOotcIsmYKlGlpyArv0D9Kq7SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzM0LzE2LzEx/LzM2MF9GXzEwMzQx/NjExOTBfT0VWWWlk/RkdZNndPRUFtSmRS/ZFNraWZ1RXJOUmt3/VlQuanBn", category: "computers", rating: 4.5, reviews: 89 },

                // Phones
                { id: 8, name: "iPhone X", price: 27999, image: "https://i.ebayimg.com/images/g/8~wAAOSw4zBnswU~/s-l960.webp", category: "phones", rating: 4.5, reviews: 98 },
                { id: 29, name: "Samsung Galaxy Fold 7", price: 209999, image: "https://imgs.search.brave.com/z9Ba9vuuWND8e2GXBwK2iE3FnNWpZxYGgX3cL95yRVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGRkI0M3hjb0wu/anBn", category: "phones", rating: 4.0, reviews: 76 },
                { id: 30, name: "iPhone 17 Pro Max", price: 309499, image: "https://imgs.search.brave.com/lXhH8s7opNFJOV4dsYSAliRazrRPKiBFf5uvBG1nMmQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3JV/N1RiVDZzeExoN0FZ/cnc2eVJtb2kuanBn", category: "phones", rating: 4.5, reviews: 143 },
                { id: 32, name: "Apple Magsafe Charger", price: 10999, image: "https://imgs.search.brave.com/nAJWOT4FyVngjooEx1JmsaLjaF_qRRSVIGxSZWiXwX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxeDBPK3Q3YWxM/LmpwZw", category: "phones", rating: 4.5, reviews: 65 },
                { id: 34, name: "Oraimo Spacebuds", price: 5999, image: "https://imgs.search.brave.com/UQGl-TJ-9osqTrHws0dSF-XWv-g0eRpDkZCroD8aJsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF6TmpvVjVkbUwu/anBn", category: "phones", rating: 4.5, reviews: 98 },
                { id: 35, name: "Samsung S25 Ultra", price: 189999, image: "https://imgs.search.brave.com/FUDEHN2IluPo5gfhL8Xc3gW3uFAPRmQYt7zMbnXKldA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF5VVZFZWtRV0wu/anBn", category: "phones", rating: 4.0, reviews: 76 },

                // Fashion
                { id: 11, name: "LV Designer Jacket", price: 80999, originalPrice: 99999, image: "https://imgs.search.brave.com/GcFqlEgngRzC2-CfbexkfnBjjdcWXvCn016VJ06xRKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIwLzQ0/LzcxLzIwNDQ3MTEw/MWJlZjliYzZlM2Uz/YzA4ZmY2N2ZhNDZl/LmpwZw", category: "fashion", rating: 4.0, reviews: 67 },
                { id: 38, name: "Gucci T-Shirt", price: 15999, image: "https://imgs.search.brave.com/G6gEnS3JUq2o7E3r_QUelNJUnQu_Yz4NffGcYDOQE7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzU2NzY3MDQ5L3Iv/aWwvYzYzZWY4Lzcx/NjM2NDMxNzgvaWxf/MzAweDMwMC43MTYz/NjQzMTc4XzNobjYu/anBn", category: "fashion", rating: 4.5, reviews: 124 },
                { id: 39, name: "Jeans", price: 3999, image: "https://imgs.search.brave.com/ouaNWiJz7aF7sQxA-I0WA-VzDtQsdxF-42vQOtbeUN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jb25jZXB0/LWplYW5zLWNhc3Vh/bC1jbG90aGVzLWRh/aWx5LTI2MG53LTI0/OTA2NDUzMDUuanBn", category: "fashion", rating: 4.0, reviews: 89 },
                { id: 40, name: "Air Jordan 4 Black Cat", price: 5999, image: "https://imgs.search.brave.com/irRg-heGTku5HJV40J7Vi7-II_mo7pwdcBBfcnnJdNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzL2Vj/LzM0LzQzZWMzNDRl/Njg3YzIzYmRjNWFl/MWEzY2NiMjkzODVl/LmpwZw", category: "fashion", rating: 4.5, reviews: 156 },
                { id: 42, name: "Denim Jacket", price: 4999, image: "https://imgs.search.brave.com/bp2d90_FCnfVxkfs25wjeIEsj_4Opx1XSB3GsVkiF9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVuaW1pbmsuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL0plYW5f/SmFja2V0X0Zyb250/X3dpdGhfcGFrcmF0/X2lua190YWdfcmVt/b3ZlZF8yMDAweC5q/cGc_dj0xNzUwODM2/NTU4", category: "fashion", rating: 4.5, reviews: 98 },
                { id: 46, name: "Men's Business Suit", price: 90999, image: "https://imgs.search.brave.com/s6Y0o1lVCMicUzHOTJHMHQwHQqL7tCc3kqIYxNljG_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MzL2Y5/LzIyL2MzZjkyMmIy/ODkzM2UyODBhZTBj/Njk0OWZmNjI1ODZm/LmpwZw", category: "fashion", rating: 4.5, reviews: 112 },

                // Home
                { id: 13, name: "Kitchen Mixer", price: 12999, originalPrice: 15999, image: "https://imgs.search.brave.com/ZZ0-vpGGIJntzZ-AXMg1fTPrW21clVZMkS5cR8qx4dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxaGRtRVNBRytM/LmpwZw", category: "home", rating: 4.0, reviews: 54 },
                { id: 16, name: "Coffee Machine", price: 8999, originalPrice: 11999, image: "https://imgs.search.brave.com/c6oFqMbKYiCX6N_YQoMSGO3mkdlaBhKi7IpXHG4vpEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI0/OTA4MjQ5L3Bob3Rv/L2NvZmZlZS1ibGVu/ZGVyLWFuZC1ib2ls/ZXItbWFjaGluZS1p/bi1raXRjaGVuLWlu/dGVyaW9yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0wSldF/dWN0b3NocnZPai10/UkFDYkxxWkg1d2lj/ZFQ5eE9DZTd6ZUVV/TFlzPQ", category: "home", rating: 4.5, reviews: 145 },
                { id: 47, name: "Air Fryer", price: 7999, image: "https://imgs.search.brave.com/9Kkcl0M7o-7rm0_8BrAQG-c-p3Y2T27X3t5dD--Q82c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxaWJMWm4zMmFM/LmpwZw", category: "home", rating: 4.0, reviews: 76 },
                { id: 48, name: "Blender", price: 4999, image: "https://imgs.search.brave.com/ehgVJwmn3PtG00yt8CZ5uudIgpSa2lbHOUmiGZdLco4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvRG5Q/Z0dyV05ubTdMd0Z5/bGo4ZUNRSEdOTTJv/PS9maXQtaW4vMTUw/MHgyNjY4L2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL3Nl/YS12aXRhbWl4LWJs/ZW5kZXJzLXRlc3Qt/ZGVjLTI0LXZpdGFt/aXgtYXNjZW50LXg1/LW5zaW1wc29uLTE4/NjQtZmQxMDZmZDg2/Nzk4NDhjZjliY2Q5/ZDBjNzgzYzZkNjMu/anBlZw", category: "home", rating: 4.5, reviews: 98 },
                { id: 50, name: "Cookware Set", price: 15999, image: "https://imgs.search.brave.com/JzBvKcEtMa2pc8pi-LF6NXQOBILV_IMpwNnK7QOJR-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc4/NzY5ODMwL3Bob3Rv/L2tpdGNoZW4tY29v/a3dhcmUtc2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz00/N05YWDY1RHhkVGVV/Y19RWnNUeXY4aGYt/dmEyd09LSTh1aldj/TmRpWXA4PQ", category: "home", rating: 4.5, reviews: 87 },
                { id: 52, name: "Vacuum Cleaner", price: 12999, image: "https://imgs.search.brave.com/1YhvSkiOnmzDB7NQo2DaQRMulv6Exjmnyy2NY1hyVp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1Lzc1Lzg1LzI2/LzM2MF9GXzE1NzU4/NTI2OTFfTFp4RjZU/ZzlDRTFaNHFTV05l/SFp1QTlMN1lwTU9O/d1kuanBn", category: "home", rating: 4.5, reviews: 112 },

                // Beauty
                { id: 18, name: "Garnier Face Wash", price: 5999, image: "https://imgs.search.brave.com/KB2jOcbV9hgECavgu3y6GBSlAe2xFq-s8WIS0twhq-s/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy52/YWxtZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDYv/Z2Fybmllci5qcGc", rating: 4.5, reviews: 67 },
                { id: 55, name: "Hair Dryer", price: 4999, image: "https://imgs.search.brave.com/mzl7GCYlxzkVDvOneg6T8Xie7ngxY5r6psg-ITolSZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/N2lxVm1ZN1BTWkxs/SFU2dGJ3ZDNyVnM3/cGVVPS9maXQtaW4v/MTUwMHgyNjY4L2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L3Blby1oYWlyLWRy/eWVycy1zZXB0LTI0/LXRlc3QtcmVtaW5n/dG9uLWRhbWFnZS1w/cm90ZWN0aW9uLWpr/aW0tMDU0OC0wMWQ3/M2Q4NWJmNDE0ZWM4/YTExYzFiYWUyOTdh/YThiMC5qcGVn", category: "beauty", rating: 4.0, reviews: 54 },
                { id: 56, name: "Makeup Kit", price: 7999, image: "https://imgs.search.brave.com/G8BBJ4UyXQPCPAsh_YgNa9GmyYYp7VsZxgF6cKK67Es/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUeXJSanlLNEwu/anBn", category: "beauty", rating: 4.5, reviews: 98 },
                { id: 57, name: "Dior Perfume", price: 32999, image: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwd6ae77e1/Y0840550/Y0840550_C099700392_E01_GHC.jpg?sw=800", category: "beauty", rating: 4.0, reviews: 76 },
                { id: 58, name: "Clique Face Moisturizer", price: 7999, image: "https://media.ulta.com/i/ulta/2261902?w=400&$ProductCardNeutralBGLight$&h=400&fmt=auto", category: "beauty", rating: 4.5, reviews: 112 },
                { id: 59, name: "Glass Skin Ginseng Collagen Mask", price: 5999, image: "https://media.ulta.com/i/ulta/2631359?w=1080&h=1080&fmt=auto", category: "beauty", rating: 4.0, reviews: 65 },

                // Baby
                { id: 15, name: "Baby Stroller", price: 15999, originalPrice: 19999, image: "https://imgs.search.brave.com/7BPNO7Z_oNByN8IAhLkL4OhZEUc07pQVDYWy6cMHv9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYWJ5/LXN0cm9sbGVyLXdo/aXRlLTQwNDk1NTk0/LmpwZw", category: "baby", rating: 4.0, reviews: 78 },
                { id: 64, name: "Lalo Hook-On High Chair", price: 12999, image: "https://target.scene7.com/is/image/Target/GUEST_8e020270-e54f-4b5d-a603-be636a53d70e?wid=1200&hei=1200&qlt=80", category: "baby", rating: 4.5, reviews: 65 },
                { id: 65, name: "Baby Monitor", price: 7999, image: "https://imgs.search.brave.com/9Jpx3JtmjleYnKA5uOKV6SLunzJNShb_L9-KwAoJivM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Fy/b3diZ0Q4ZEdMTm9u/RHNrWnlodDUuanBn", category: "baby", rating: 4.0, reviews: 43 },
                { id: 66, name: "Baby Pajamas", price: 2999, image: "https://imgs.search.brave.com/soGuWP7wjNgFACIdmcKZBhnC0zc-B25MGwHi3DKOn9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwN0x3bWFjY0wu/anBn", category: "baby", rating: 4.5, reviews: 98 },
                { id: 69, name: "Pampers Diapers", price: 3499, image: "https://imgs.search.brave.com/4htUbhyVnRoeZH4wG2KKt1-lgFCnuImaJqKX-8aXmjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYW1w/ZXJzLWRpYXBlcnMt/c3VwZXJtYXJrZXQt/c2hlbGYtbm93eS1z/YWN6LXBvbGFuZC1z/ZXB0ZW1iZXItdmFy/aW91cy10eXBlcy1h/Y3RpdmUtYmFieS1k/cnktcHJvY3Rlci1n/YW1ibGUtY28tb2Zm/ZXJlZC0xMDE2Mzg0/MzcuanBn", category: "baby", rating: 4.0, reviews: 87 },
                { id: 70, name: "Baby Toys Set", price: 2499, image: "https://imgs.search.brave.com/4htUbhyVnRoeZH4wG2KKt1-lgFCnuImaJqKX-8aXmjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYW1w/ZXJzLWRpYXBlcnMt/c3VwZXJtYXJrZXQt/c2hlbGYtbm93eS1z/YWN6LXBvbGFuZC1z/ZXB0ZW1iZXItdmFy/aW91cy10eXBlcy1h/Y3RpdmUtYmFieS1k/cnktcHJvY3Rlci1n/YW1ibGUtY28tb2Zm/ZXJlZC0xMDE2Mzg0/MzcuanBn", category: "baby", rating: 4.5, reviews: 112 },

                // Sports
                { id: 14, name: "Galaxy Watch 8", price: 50999, originalPrice: 60999, image: "https://imgs.search.brave.com/PLGEEBWnLgY5hNrzmsd1trrffZDPYEaw_v-Jl1fwab8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saWZl/aGFja2VyLmNvbS9p/bWFnZXJ5L3Byb2R1/Y3QvMDZjd1o3dUhB/YWpGSjJhUDByOE5q/a3IvaGVyby1pbWFn/ZS5maWxsLnNpemVf/YXV0b3hhdXRvLnYx/NzUzNDY4NDkxLmpw/Zw", category: "sports", rating: 4.5, reviews: 112 },
                { id: 73, name: "Yoga Mat", price: 2999, image: "https://imgs.search.brave.com/DjI2yXCCk8SswQd18dXBbf8dlc-Pc1gFwCthCf3vgRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVyeXdlbGxmaXQu/Y29tL3RobWIvWmpM/VEdYakZkVWUyVDBw/N0dNX3F4Zkg1NDFN/PS9maXQtaW4vMTUw/MHgxMDAwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL3lv/bG9oYS1hdXJhLWNv/cmsteW9nYS1tYXQt/MWY4MjAyMWIzYzc1/NDQyYjgwYjAyNTUz/MDQ0MTJlOGYuanBn", category: "sports", rating: 4.5, reviews: 76 },
                { id: 74, name: "Dumbbell Set", price: 18999, image: "https://www.torquefitness.com/cdn/shop/products/XG-DBRH550-USR4_main_1035x.jpg?v=1675789890", category: "sports", rating: 4.0, reviews: 54 },
                { id: 75, name: "Spadling Basketball", price: 5999, image: "https://imgs.search.brave.com/3dAKlf5WCmyJRVH4ZiepIZ0NxnigYyrbXr8QuZk2QwI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzZE/WVFhcFZFZFlwZkc1/MmV5ZWQ2WUIuanBn", category: "sports", rating: 4.5, reviews: 98 },
                { id: 76, name: "Tennis Racket", price: 6999, image: "https://imgs.search.brave.com/0HVVzj06B584fnHz_X1JrsP05PhCG_GYaPReWmSG9Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZW5u/aXMtcmFja2V0LWJh/bGwtaXNvbGF0ZWQt/d2hpdGUtMzg4ODk3/Njk2LmpwZw", category: "sports", rating: 4.0, reviews: 65 },
                { id: 78, name: "Electric Bike", price: 50999, image: "https://imgs.search.brave.com/NIS3GEqHsvU_Se_dZEHe7fAub-yU1fM0p7ZV1y9DhWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxMmJDYTFoZ0RM/LmpwZw", category: "sports", rating: 4.0, reviews: 43 },

                // Supermarket
                { id: 81, name: "20 litre Fresh Fry", price: 5000, image: "https://imgs.search.brave.com/obJn5aPMNbgJ547b8TsXvw_oDs4ncpwbMoK5d1JkwdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFmcnNlcnZpY2Vz/LmNvbS9zeXMtbWFz/dGVyLXJvb3QvaDBh/L2g1ZC8xMjQ1Njkw/ODg4MTk1MC82NzEx/OV9NYWluLmpwZz9p/bT1SZXNpemU9NDgw", rating: 4.5, reviews: 124 },
                { id: 82, name: "Pishori Rice 5kg", price: 1899, image: "https://imgs.search.brave.com/bsUMN6m2WxR06BVb1mqP03G7w8_s_8hJyldkZmaH28g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVva2luZ3Nob3Au/b25saW5lL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA1L0NJ/TC1QaXNob3JpLVJp/Y2UtNWtnLmpwZw", category: "supermarket", rating: 4.0, reviews: 89 },
                { id: 83, name: "Mumias Sugar 2kg", price: 299, image: "https://imgs.search.brave.com/w30em0F7qBidFDnEROPbU7gWLFemv7OPB6HM08U6HHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2Frcy5kZWxpdmVy/eS93cC1jb250ZW50/L3VwbG9hZHMvQ29w/eS1vZi1Db3B5LW9m/LVNvY2lhbC1NZWRp/YS1Qcm9kdWN0LUFk/LTgwMC14LTgwMC1w/eC0yMDI1LTAxLTMw/VDE0MDc1OC44MDUt/NjAweDYwMC5qcGc", category: "supermarket", rating: 4.5, reviews: 156 },
                { id: 85, name: "Pasta 2kg", price: 599, image: "https://imgs.search.brave.com/TTjlA0bfgBzAwHIWcVCp3eJh-ttVUG58B4GmRXJVL_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFvd0tlSVV5Z0wu/anBn", category: "supermarket", rating: 4.5, reviews: 98 },
                { id: 88, name: "CornFlakes 500g", price: 799, image: "https://imgs.search.brave.com/EsnCAtx0AQxhtq6zOg9lGTCFg8Oipxq6NjEH3mhh6tE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvY2VyZWFsLWZs/YWtlLzYvaC9rLzEt/MTUtY29ybi1mbGFr/ZXMtb3JpZ2luYWwt/cG93ZXItb2YtZW5l/cmd5LXByb3RlaW4t/aXJvbi1jYWxjaXVt/LW9yaWdpbmFsLWlt/YWhkd3A3Z2Y5aHVl/ZmguanBlZz9xPTcw", category: "supermarket", rating: 4.0, reviews: 65 },
                { id: 89, name: "Tuzo Milk 1L", price: 99, image: "https://imgs.search.brave.com/H9rQ32wl9mbpdb6GQzJaBacaf2pHQg7WzZqj6NkSOwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFmcnNlcnZpY2Vz/LmNvbS9zeXMtbWFz/dGVyLXJvb3QvaDg1/L2g3NS8zMzUxMDk3/NjA2MTQ3MC8xNzk4/NjRfbWFpbi5qcGc_/aW09UmVzaXplPTQ4/MA", category: "supermarket", rating: 4.5, reviews: 112 },
            ],
        },
        users: [
            { username: 'testuser', password: 'password123', email: 'testuser@example.com', wishlist: [] }
        ],
        currentUser: null,
        cart: [],
        orders: [
            { id: 'HM-12345', userId: 'testuser', status: 'Processing', details: 'Your order has been received and is being processed by our warehouse.', date: '2025-07-20', items: ['Smart Watch Series 5'] },
            { id: 'HM-67890', userId: 'testuser', status: 'Shipped', details: 'Your order has been shipped and is on its way. The tracking number is XYZ-987.', date: '2025-07-19', items: ['HP Dragonfly Pro', 'Coffee Machine'] },
            { id: 'HM-54321', userId: 'testuser', status: 'Delivered', details: 'Your order was delivered successfully.', date: '2025-07-18', items: ['LV Designer Jacket'] },
            { id: 'HM-11223', userId: 'testuser', status: 'Cancelled', details: 'This order has been cancelled as per your request.', date: '2025-07-17', items: ['Kitchen Mixer'] }
        ],
        confirmationCallback: null, // To store the action for the confirmation modal
    };

    // --- LOCAL STORAGE ---

    const saveUserToStorage = (user) => {
        if (!user) {
            localStorage.removeItem('harakaMartUser');
            return;
        }
        try {
            localStorage.setItem('harakaMartUser', JSON.stringify(user));
        } catch (e) {
            console.error("Failed to save user to localStorage", e);
        }
    };
    
    const loadUserFromStorage = () => {
        try {
            const savedUser = localStorage.getItem('harakaMartUser');
            if (!savedUser) return null;

            const userData = JSON.parse(savedUser);
            // Find the full user object from our "database" to get methods/full data
            return state.users.find(u => u.username === userData.username) || null;
        } catch (e) {
            console.error("Failed to load user from localStorage", e);
            return null;
        }
    };

    const saveUsersToStorage = () => {
        try {
            localStorage.setItem('harakaMartUsers', JSON.stringify(state.users));
        } catch (e) {
            console.error("Failed to save users to localStorage", e);
        }
    };

    const loadUsersFromStorage = () => {
        try {
            const savedUsers = localStorage.getItem('harakaMartUsers');
            if (savedUsers) {
                state.users = JSON.parse(savedUsers);
            }
        } catch (e) {
            console.error("Failed to load users from localStorage", e);
            // state.users will retain its default value
        }
    };

    const saveCartToStorage = (user) => {
        if (!user) return; // Don't save cart for logged-out users
        try {
            localStorage.setItem(`harakaMartCart_${user.username}`, JSON.stringify(state.cart));
        } catch (e) {
            console.error("Failed to save cart to localStorage", e);
            showNotification("Could not save your cart. Please check your browser settings.", "danger");
        }
    };

    const loadCartFromStorage = (user) => {
        if (!user) {
            state.cart = [];
            updateCartDisplay();
            return;
        }
        try {
            const savedCart = localStorage.getItem(`harakaMartCart_${user.username}`);
            if (savedCart) {
                state.cart = JSON.parse(savedCart);
            } else {
                state.cart = []; // Ensure cart is empty if nothing is saved for this user
            }
        } catch (e) {
            console.error("Failed to load cart from localStorage", e);
            state.cart = []; // Reset to empty cart on error
        }
        updateCartDisplay();
    };

    // --- DOM SELECTORS ---
    const doc = document;
    const body = doc.body;
    const mainContent = doc.getElementById('main-content');
    const searchInput = doc.getElementById('search-input');
    const searchResults = doc.getElementById('search-results');

    // --- EVENT LISTENERS ---

    /**
     * Main event delegation handler for the entire page.
     * Listens for clicks and routes them to the appropriate function based on `data-action`.
     */
    body.addEventListener('click', (e) => {
        const target = e.target;
        const actionElement = target.closest('[data-action]');

        if (!actionElement) return;

        const action = actionElement.dataset.action;
        e.preventDefault(); // Prevent default link behavior

        switch (action) {
            // Navigation
            case 'show-home': showHome(); break;
            case 'show-category': showCategory(actionElement.dataset.category); break;
            case 'scroll-to': scrollToSection(actionElement.getAttribute('href').substring(1)); break;
            case 'scroll-to-top': window.scrollTo({ top: 0, behavior: 'smooth' }); break;

            // Modals
            case 'open-cart': openModal('cart-modal'); break;
            case 'show-account': openModal('account-modal'); break;
            case 'show-help': openModal('help-modal'); break;
            case 'open-login': openModal('login-modal'); break;
            case 'close-modal': closeModal(actionElement.dataset.modal); break;
            case 'open-modal': openModal(actionElement.dataset.modal); break;

            // Cart Actions
            case 'add-to-cart': handleAddToCart(actionElement.dataset, e); break;
            case 'remove-from-cart': removeFromCart(actionElement.dataset.name); break;
            case 'update-quantity': updateQuantity(actionElement.dataset.name, parseInt(actionElement.dataset.quantity)); break;
            case 'checkout': checkout(); break;
            case 'clear-cart': clearCart(); break;

            // Confirmation Modal Actions
            case 'confirm-proceed': handleConfirmProceed(); break;
            case 'confirm-cancel': handleConfirmCancel(); break;
            case 'process-mpesa-payment': processMpesaPayment(); break;

            // Product Actions
            case 'register-user': registerUser(); break;
            case 'proceed-google-signin': showNotification('Redirecting to Google for sign-in... (simulated)', 'info'); break;
            case 'send-magic-link': showNotification('Magic link sent to your email! (simulated)', 'info'); break;
            case 'reset-password': resetPassword(); break;
            case 'order-now': handleOrderNow(actionElement.dataset); break;
            case 'view-details': showProductDetails(actionElement.dataset.name); break;
            case 'add-to-wishlist': handleAddToWishlist(actionElement.dataset); break;
            case 'select-search-result': selectSearchResult(actionElement.dataset.name); break;

            // Login/Account Actions
            case 'login': login(); break;
            case 'logout': logout(); break;
            case 'toggle-password': togglePassword(); break;
            case 'show-order-history': showOrderHistory(); break;
            case 'show-wishlist': showWishlist(); break;

            // Footer Actions
            case 'subscribe-newsletter': subscribeNewsletter(); break;
            case 'open-social': showNotification(`Opening ${actionElement.dataset.platform}...`); break;
            case 'track-order': trackOrder(); break;
        }
    });

    /**
     * Handles real-time search input.
     */
    searchInput.addEventListener('input', () => searchProducts());
    doc.getElementById('perform-search-btn').addEventListener('click', () => performSearch());

    /**
     * Closes modals when clicking outside of the content area.
     */
    window.addEventListener('click', (event) => {
        if (event.target.matches('.cart-modal, .login-modal, .account-modal, .help-modal, .confirm-modal, .mpesa-modal, .about-modal, .terms-modal, .privacy-modal, .faq-modal, .shipping-modal, .careers-modal, .blog-modal, .press-modal, .contact-modal, .track-order-modal, .signup-modal, .forgot-password-modal, .google-signin-modal, .email-signin-modal')) {
            closeModal(event.target.id);
        }
    });

    /**
     * Handles the visibility of the "Back to Top" button on scroll.
     */
    window.addEventListener('scroll', () => {
        const backToTopBtn = doc.getElementById('back-to-top-btn');
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });


    // --- RENDERING FUNCTIONS ---

    /**
     * Creates the HTML for a single product card.
     * @param {object} product - The product data.
     * @param {boolean} isDeal - Whether the product is a daily deal.
     * @returns {HTMLElement} The product card element.
     */
    const createProductCard = (product, isDeal = false) => {
        const card = doc.createElement('div');
        card.className = 'product-card';

        const isWishlisted = state.currentUser?.wishlist?.some(item => item.id === product.id);
        const wishlistBtnClass = isWishlisted ? 'wishlist-btn active' : 'wishlist-btn';

        const ratingStars = generateRatingStars(product.rating);

        let priceHtml = `<div class="product-price">Ksh ${product.price.toLocaleString()}</div>`;
        if (isDeal && product.originalPrice) {
            priceHtml = `
                <div class="product-price">
                    <span style="text-decoration: line-through; color: #777; font-size: 0.9rem;">Ksh ${product.originalPrice.toLocaleString()}</span>
                    <span>Ksh ${product.price.toLocaleString()}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <button class="${wishlistBtnClass}" data-action="add-to-wishlist" data-id="${product.id}"><i class="fas fa-heart"></i></button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                ${priceHtml}
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-outline" data-action="order-now" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Order Now</button>
                    <button class="btn btn-outline" data-action="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
                </div>
            </div>
        `;

        return card;
    };

    /**
     * Generates star icons for product ratings.
     * @param {number} rating - The product's rating.
     * @returns {string} HTML string of star icons.
     */
    const generateRatingStars = (rating) => {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
        if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';

        return stars;
    };

    /**
     * Updates the entire cart display (count, items, total).
     */
    const updateCartDisplay = () => {
        const cartCount = doc.getElementById('cart-count');
        const cartItems = doc.getElementById('cart-items');
        const cartTotalElement = doc.getElementById('cart-total');

        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        cartCount.textContent = totalItems;
        cartTotalElement.textContent = `Total: Ksh ${cartTotal.toLocaleString()}`;

        if (state.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
            return;
        }

        cartItems.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">Ksh ${item.price.toLocaleString()}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-action="update-quantity" data-name="${item.name}" data-quantity="${item.quantity - 1}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-action="update-quantity" data-name="${item.name}" data-quantity="${item.quantity + 1}">+</button>
                </div>
                <button class="remove-item" data-action="remove-from-cart" data-name="${item.name}">Remove</button>
            </div>
        `).join('');
    };

    /**
     * Updates the account modal with user information or a login prompt.
     */
    const updateAccountDisplay = () => {
        const accountInfo = doc.getElementById('account-info');
        const accountLinkText = doc.getElementById('account-link-text');
        if (state.currentUser) {
            accountInfo.innerHTML = `
                <p>Welcome, ${state.currentUser.username}!</p>
                <p>Email: ${state.currentUser.email}</p>
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" data-action="show-order-history">Order History</button>
                    <button class="btn btn-primary" data-action="show-wishlist" style="margin-left: 10px;">My Wishlist</button>
                    <button class="btn btn-outline" data-action="logout" style="margin-left: 10px;">Logout</button>
                </div>
            `;
            accountLinkText.textContent = `Hi, ${state.currentUser.username}`;
        } else {
            accountInfo.innerHTML = '<p>You are not logged in. <a href="#" data-action="open-login">Login</a> to view your account.</p>';
            accountLinkText.textContent = 'Account';
        }
    };

    // --- PRODUCT & CATEGORY LOADING ---

    const loadProducts = (gridId, productList, isDeal = false) => {
        const grid = doc.getElementById(gridId);
        if (!grid) return;
        grid.innerHTML = '';
        productList.forEach(product => {
            grid.appendChild(createProductCard(product, isDeal));
        });
    };

    const loadFeaturedProducts = () => loadProducts('featured-grid', state.products.featured);
    const loadDailyDeals = () => loadProducts('deals-grid', state.products.deals, true);
    const loadCategoryProducts = (category) => {
        const categoryProducts = state.products.all
            .filter(p => p.category === category)
            .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

        loadProducts(`${category}-grid`, categoryProducts);
    };


    // --- NAVIGATION & PAGE VIEWS ---

    const showHome = () => {
        mainContent.style.display = 'block';
        doc.querySelectorAll('.category-page').forEach(page => page.classList.remove('active'));
    };

    const showCategory = (category) => {
        window.scrollTo(0, 0); // Scroll to top to make page change obvious
        hideAllPages();

        const categoryPage = doc.getElementById(category + '-page');
        if (categoryPage) {
            categoryPage.classList.add('active');
            loadCategoryProducts(category);
        } else {
            showNotification(`${category.charAt(0).toUpperCase() + category.slice(1)} page coming soon!`);
            showHome();
        }
    };

    const showProductDetails = (productName) => {
        const product = state.products.all.find(p => p.name === productName);
        if (!product) {
            showNotification('Product not found.', 'danger');
            return;
        }

        window.scrollTo(0, 0);
        hideAllPages();

        const detailPage = doc.getElementById('product-detail-page');
        const detailContent = doc.getElementById('product-detail-content');

        detailContent.innerHTML = `
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-price">Ksh ${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${generateRatingStars(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
                <p class="product-description">
                    Discover the amazing features of the ${product.name}. This product combines style and functionality, offering a top-tier experience. Perfect for your needs, it's built with quality materials and the latest technology.
                </p>
                <div class="product-actions">
                    <button class="btn btn-outline" data-action="order-now" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Order Now</button>
                    <button class="btn btn-outline" data-action="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
                </div>
            </div>
        `;

        detailPage.classList.add('active');
    };

    const showOrderHistory = () => {
        if (!state.currentUser) {
            openModal('login-modal');
            return;
        }
        hideAllPages();
        closeModal('account-modal');
        window.scrollTo(0, 0);

        const orderHistoryPage = doc.getElementById('order-history-page');
        const orderHistoryContent = doc.getElementById('order-history-content');

        const userOrders = state.orders.filter(order => order.userId === state.currentUser.username);

        if (userOrders.length === 0) {
            orderHistoryContent.innerHTML = '<p>You have no past orders.</p>';
        } else {
            orderHistoryContent.innerHTML = userOrders.map(order => {
                let statusColor;
                switch (order.status.toLowerCase()) {
                    case 'delivered': statusColor = 'var(--success)'; break;
                    case 'shipped': statusColor = 'var(--info)'; break;
                    case 'processing': statusColor = 'var(--primary)'; break;
                    case 'cancelled': statusColor = 'var(--danger)'; break;
                    default: statusColor = '#333';
                }
                return `
                    <div class="order-history-card">
                        <div class="order-history-header">
                            <h3>Order ID: ${order.id}</h3>
                            <span class="order-status" style="background-color: ${statusColor};">${order.status}</span>
                        </div>
                        <div class="order-history-body">
                            <p><strong>Date:</strong> ${order.date}</p>
                            <p><strong>Items:</strong> ${order.items.join(', ')}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }

        orderHistoryPage.classList.add('active');
    };

    const showWishlist = () => {
        if (!state.currentUser) {
            openModal('login-modal');
            return;
        }
        hideAllPages();
        closeModal('account-modal');
        window.scrollTo(0, 0);

        const wishlistPage = doc.getElementById('wishlist-page');
        const wishlistGrid = doc.getElementById('wishlist-grid');

        if (state.currentUser.wishlist && state.currentUser.wishlist.length > 0) {
            loadProducts('wishlist-grid', state.currentUser.wishlist);
        } else {
            wishlistGrid.innerHTML = '<p>Your wishlist is empty. Add items by clicking the heart icon on any product!</p>';
        }
        wishlistPage.classList.add('active');
    };

    const scrollToSection = (sectionId) => {
        const section = doc.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hideAllPages = () => {
        mainContent.style.display = 'none';
        doc.querySelectorAll('.category-page').forEach(page => page.classList.remove('active'));
    };


    // --- MODAL HANDLING ---

    const openModal = (modalId) => {
        const modal = doc.getElementById(modalId);
        if (modal) {
            // If opening a modal from within another modal, close the current one.
            // This logic seems to have been removed, let's re-add a simplified version
            const currentOpenModal = doc.querySelector('.login-modal[style*="display: block"], .signup-modal[style*="display: block"], .forgot-password-modal[style*="display: block"], .google-signin-modal[style*="display: block"], .email-signin-modal[style*="display: block"]');
            if (currentOpenModal && currentOpenModal.id !== modalId) {
                closeModal(currentOpenModal.id);
            }

            if (modalId === 'account-modal') {
                updateAccountDisplay();
            }
            // Use flex for modals that are designed to be centered this way
            if (modalId === 'track-order-modal') {
                modal.style.display = 'flex';
            } else {
                modal.style.display = 'block';
            }
        }
    };

    const closeModal = (modalId) => {
        const modal = doc.getElementById(modalId);
        if (modal) modal.style.display = 'none';
    };

    /**
     * Shows a confirmation modal and sets a callback for the confirm action.
     * @param {string} title - The title for the confirmation dialog.
     * @param {string} message - The message for the confirmation dialog.
     * @param {Function} callback - The function to execute if the user confirms.
     */
    const showConfirmation = (title, message, callback) => {
        const confirmModal = doc.getElementById('confirm-modal');
        doc.getElementById('confirm-title').textContent = title;
        doc.getElementById('confirm-message').textContent = message;
        
        state.confirmationCallback = callback;

        confirmModal.style.display = 'flex';
    };

    /**
     * Handles the 'Confirm' button click in the confirmation modal.
     */
    const handleConfirmProceed = () => {
        if (typeof state.confirmationCallback === 'function') {
            state.confirmationCallback();
        }
        handleConfirmCancel(); // Close modal and reset callback
    };

    /**
     * Handles the 'Cancel' button click and closes the confirmation modal.
     */
    const handleConfirmCancel = () => {
        state.confirmationCallback = null;
        closeModal('confirm-modal');
    };


    // --- CART LOGIC ---

    const handleOrderNow = (productData) => {
        if (!state.currentUser) {
            openModal('login-modal');
            return;
        }
        const { name, price, image } = productData;
        const productPrice = parseFloat(price);

        // Open M-Pesa modal directly
        openModal('mpesa-modal');

        // Update the total in the M-Pesa modal for this single item
        doc.getElementById('mpesa-total-amount').textContent = `Ksh ${productPrice.toLocaleString()}`;
    };

    const handleAddToCart = (productData, event) => {
        if (!state.currentUser) {
            openModal('login-modal');
            return;
        }

        // Trigger the fly-to-cart animation
        flyToCart(event);

        const { name, price, image } = productData;
        addToCart(name, parseFloat(price), image);
    };

    /**
     * Creates an image of the product and animates it to the cart icon.
     * @param {Event} event - The click event from the "Add to Cart" button.
     */
    const flyToCart = (event) => {
        const cartIcon = doc.querySelector('[data-action="open-cart"]');
        const productCard = event.target.closest('.product-card');
        if (!cartIcon || !productCard) return;

        const productImage = productCard.querySelector('.product-image');
        if (!productImage) return;

        const startRect = productImage.getBoundingClientRect();
        const endRect = cartIcon.getBoundingClientRect();

        const flyingImg = doc.createElement('img');
        flyingImg.src = productImage.src;
        flyingImg.className = 'flying-product-img';

        // Set initial position
        flyingImg.style.left = `${startRect.left}px`;
        flyingImg.style.top = `${startRect.top}px`;

        body.appendChild(flyingImg);

        // Animate to the end position after a short delay to ensure the element is rendered
        setTimeout(() => {
            flyingImg.style.opacity = '1';
            flyingImg.style.left = `${endRect.left + (endRect.width / 2)}px`;
            flyingImg.style.top = `${endRect.top + (endRect.height / 2)}px`;
            flyingImg.style.transform = 'scale(0.1)';
            flyingImg.style.opacity = '0';
        }, 10);

        // Remove the element after the animation completes
        setTimeout(() => body.removeChild(flyingImg), 800); // Matches the CSS transition duration
    };

    const addToCart = (name, price, image) => {
        const existingItem = state.cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cart.push({ name, price, image, quantity: 1 });
        }
        saveCartToStorage(state.currentUser);
        updateCartDisplay();
        showNotification(`${name} added to cart!`);
    };

    const removeFromCart = (name) => {
        state.cart = state.cart.filter(item => item.name !== name);
        saveCartToStorage(state.currentUser);
        updateCartDisplay();
    };

    const updateQuantity = (name, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(name);
            return;
        }
        const item = state.cart.find(item => item.name === name);
        if (item) {
            item.quantity = newQuantity;
            saveCartToStorage(state.currentUser);
            updateCartDisplay();
        }
    };

    const checkout = () => {
        if (state.cart.length === 0) {
            showNotification('Your cart is empty!', 'warning');
            return;
        }
        // Close the cart modal and open the M-Pesa modal
        closeModal('cart-modal');
        openModal('mpesa-modal');

        // Update the total in the M-Pesa modal
        const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        doc.getElementById('mpesa-total-amount').textContent = `Ksh ${cartTotal.toLocaleString()}`;
    };

    const processMpesaPayment = () => {
        const phoneInput = doc.getElementById('mpesa-phone');
        const phoneNumber = phoneInput.value.trim();

        // Basic validation for a Kenyan phone number
        if (!/^(07|01)\d{8}$/.test(phoneNumber)) {
            showNotification('Please enter a valid M-Pesa number (e.g., 0712345678).', 'danger');
            return;
        }

        // Simulate sending a payment request
        showNotification(`Sending payment request to ${phoneNumber}...`, 'info');
        closeModal('mpesa-modal');

        // Simulate a successful payment after a delay
        setTimeout(() => {
            const cartTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            showNotification(`Payment of Ksh ${cartTotal.toLocaleString()} successful! Your order is being processed.`);
            state.cart = [];
            saveCartToStorage(state.currentUser); // Saves an empty cart for the user
            updateCartDisplay();
        }, 2500); // 2.5-second delay to simulate processing
    }

    const clearCart = () => {
        if (state.cart.length > 0) {
            showConfirmation(
                'Clear Cart?',
                'Are you sure you want to remove all items from your cart? This action cannot be undone.',
                () => { // This function will run only if the user confirms
                state.cart = [];
                saveCartToStorage(state.currentUser);
                updateCartDisplay();
                showNotification("Your cart has been cleared.", "info");
                }
            );
        }
    };

    const handleAddToWishlist = (productData) => {
        if (!state.currentUser) {
            openModal('login-modal');
            return;
        }

        const productId = parseInt(productData.id);
        const product = state.products.all.find(p => p.id === productId);
        if (!product) return;

        // Ensure wishlist exists
        if (!state.currentUser.wishlist) {
            state.currentUser.wishlist = [];
        }

        const wishlist = state.currentUser.wishlist;
        const itemIndex = wishlist.findIndex(item => item.id === productId);

        const wishlistBtn = doc.querySelector(`.wishlist-btn[data-id="${productId}"]`);

        if (itemIndex > -1) {
            wishlist.splice(itemIndex, 1); // Remove from wishlist
            showNotification(`${product.name} removed from wishlist.`, 'info');
            if (wishlistBtn) wishlistBtn.classList.remove('active');
        } else {
            wishlist.push(product); // Add to wishlist
            showNotification(`${product.name} added to wishlist!`);
            if (wishlistBtn) {
                wishlistBtn.classList.add('active');
                // Add the bounce animation class
                wishlistBtn.classList.add('bouncing');
                // Remove the class after the animation completes to allow it to re-trigger
                setTimeout(() => {
                    wishlistBtn.classList.remove('bouncing');
                }, 600); // Duration should match the CSS animation
            }
        }

        saveUserToStorage(state.currentUser); // Save updated user data
    };


    // --- USER & LOGIN LOGIC ---

    const login = () => {
        const username = doc.getElementById('username').value;
        const password = doc.getElementById('password').value;
        const rememberMe = doc.getElementById('remember-me').checked;

        if (!username || !password) {
            showNotification('Please enter both username and password', 'danger');
            return;
        }

        // Find user
        const user = state.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

        if (user) {
            state.currentUser = user;
            if (rememberMe) {
                saveUserToStorage(user);
            }
            loadCartFromStorage(user); // Load the cart for the logged-in user
            showNotification(`Welcome back, ${user.username}!`);
            closeModal('login-modal');
            updateAccountDisplay();
            // Reload products to update wishlist icons
            loadFeaturedProducts();
            loadDailyDeals();
        } else {
            showNotification('Invalid username or password.', 'danger');
        }
    };

    const logout = () => {
        saveUserToStorage(null); // Clear remembered user

        state.currentUser = null;
        state.cart = []; // Reset cart in the application state

        // Update UI to reflect the changes
        updateCartDisplay();
        updateAccountDisplay();
        closeModal('account-modal');
        showNotification('You have been logged out');
        // Reload product grids to reset wishlist icon states
        loadFeaturedProducts();
        loadDailyDeals();
    };

    const togglePassword = () => {
        const passwordInput = doc.getElementById('password');
        const toggleIcon = doc.querySelector('.toggle-password i');
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        toggleIcon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    };

    const resetPassword = () => {
        const emailInput = doc.getElementById('forgot-password-email');
        const email = emailInput.value.trim();

        if (email && emailInput.checkValidity()) {
            showNotification(`If an account exists for ${email}, a password reset link has been sent.`);
            closeModal('forgot-password-modal');
            emailInput.value = '';
        } else {
            showNotification('Please enter a valid email address.', 'danger');
        }
    };

    const registerUser = () => {
        const usernameInput = doc.getElementById('signup-username');
        const emailInput = doc.getElementById('signup-email');
        const passwordInput = doc.getElementById('signup-password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation
        if (!username || !email || !password) {
            showNotification('Please fill in all fields.', 'danger');
            return;
        }
        if (!emailInput.checkValidity()) {
            showNotification('Please enter a valid email address.', 'danger');
            return;
        }
        if (state.users.find(user => user.username.toLowerCase() === username.toLowerCase())) {
            showNotification('Username already taken.', 'danger');
            return;
        }
        if (state.users.find(user => user.email.toLowerCase() === email.toLowerCase())) {
            showNotification('An account with this email already exists.', 'danger');
            return;
        }

        // Create and log in the new user
        const newUser = { username, email, password, wishlist: [] }; // In a real app, hash the password!
        state.users.push(newUser);
        saveUsersToStorage(); // Persist the new user list
        state.currentUser = newUser;

        // UI updates
        loadCartFromStorage(newUser); // Initialize empty cart for new user
        showNotification(`Welcome, ${username}! Your account has been created.`, 'success');
        closeModal('signup-modal');
        updateAccountDisplay();

        // Clear form fields
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    };


    // --- SEARCH LOGIC ---

    const searchProducts = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const allProducts = state.products.all;
        const uniqueProducts = [...new Map(allProducts.map(item => [item['id'], item])).values()];

        const filteredProducts = uniqueProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );

        if (filteredProducts.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        } else {
            searchResults.innerHTML = filteredProducts.slice(0, 10).map(product => `
                <div class="search-result-item" data-action="select-search-result" data-name="${product.name}">
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <div>${product.name}</div>
                        <div style="color: var(--primary); font-weight: bold;">Ksh ${product.price.toLocaleString()}</div>
                    </div>
                </div>
            `).join('');
        }
        searchResults.style.display = 'block';
    };

    const performSearch = () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            showNotification(`Searching for: "${searchTerm}"... (Full search page coming soon!)`);
            searchResults.style.display = 'none';
        }
    };

    const selectSearchResult = (productName) => {
        searchInput.value = productName;
        searchResults.style.display = 'none';
        showProductDetails(productName);
    };

    // --- ORDER TRACKING ---

    const trackOrder = () => {
        const orderIdInput = doc.getElementById('order-id-input');
        const resultContainer = doc.getElementById('order-status-result');
        const orderId = orderIdInput.value.trim().toUpperCase();

        if (!orderId) {
            showNotification('Please enter an Order ID.', 'warning');
            return;
        }

        const order = state.orders.find(o => o.id === orderId);

        resultContainer.style.display = 'block'; // Show the results area

        if (order) {
            let statusColor;
            switch (order.status.toLowerCase()) {
                case 'delivered': statusColor = 'var(--success)'; break;
                case 'shipped': statusColor = 'var(--info)'; break;
                case 'processing': statusColor = 'var(--primary)'; break;
                case 'cancelled': statusColor = 'var(--danger)'; break;
                default: statusColor = '#333';
            }

            resultContainer.innerHTML = `
                <h4>Order Status</h4>
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Status:</strong> <span style="color: ${statusColor}; font-weight: bold;">${order.status}</span></p>
                <p><strong>Details:</strong> ${order.details}</p>
                <p><strong>Order Date:</strong> ${order.date}</p>
            `;
        } else {
            resultContainer.innerHTML = `<p style="color: var(--danger);"><strong>Order not found.</strong> Please check the Order ID and try again.</p>`;
        }
    };


    // --- MISC & UTILITY FUNCTIONS ---

    const subscribeNewsletter = () => {
        const emailInput = doc.getElementById('newsletter-email');
        if (emailInput.value && emailInput.checkValidity()) {
            showNotification(`Thank you for subscribing with email: ${emailInput.value}`);
            emailInput.value = '';
        } else {
            showNotification('Please enter a valid email address', 'danger');
        }
    };

    const showNotification = (message, type = 'success') => {
        const notification = doc.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--${type});
            color: white;
            padding: 15px 20px;
            border-radius: 4px;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateX(20px);
        `;
        notification.textContent = message;
        body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(20px)';
            setTimeout(() => body.removeChild(notification), 300);
        }, 3000);
    };

    const updateCountdown = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const difference = endOfDay - now;
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        doc.getElementById('countdown-timer').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const setupIntersectionObserver = () => {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elementsToAnimate = doc.querySelectorAll('.feature-card');
        elementsToAnimate.forEach(el => observer.observe(el));
    };


    // --- INITIALIZATION ---
    const init = () => {
        loadUsersFromStorage(); // Load all registered users first
        const rememberedUser = loadUserFromStorage();
        if (rememberedUser) {
            state.currentUser = rememberedUser;
        }
        loadCartFromStorage(state.currentUser); // Load cart based on whether a user is logged in
        loadFeaturedProducts();
        loadDailyDeals();
        updateCountdown();
        updateAccountDisplay(); // Add this to update UI for remembered user
        setInterval(updateCountdown, 1000);
        setupIntersectionObserver();
    };

    init();
});
