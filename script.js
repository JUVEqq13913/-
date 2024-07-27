// 确保DOM元素加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
    const contentPage = document.getElementById('content-page');
    const contentTitle = document.getElementById('content-title');
    const contentDescription = document.getElementById('content-description');
    const contentImage = document.getElementById('content-image');

    function showContent(contentId) {
        // 模拟加载内容
        const contentData = getContentData(contentId);
        contentTitle.textContent = contentData.title;
        contentDescription.textContent = contentData.description;
        contentImage.src = contentData.image;

        contentPage.style.display = 'block';
    }

    function closeContent() {
        contentPage.style.display = 'none';
    }

    function submitVote() {
        const rating = document.querySelector('input[name="rating"]:checked').value;
        console.log(`Rating submitted: ${rating}`);
        closeContent();
        return false; // 阻止表单默认提交行为
    }

    function getContentData(id) {
        const data = {
            text1: { title: "文章1", description: "这是文章1的内容", image: "" },
            text2: { title: "文章2", description: "这是文章2的内容", image: "" },
            // ... 其他文章数据
            image1: { title: "图片1", description: "", image: "path/to/image1.jpg" },
            // ... 其他图片数据
        };
        return data[id];
    }
});