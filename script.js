document.addEventListener("DOMContentLoaded", () => {
    const storyForm = document.getElementById("story-form");
    const storyText = document.getElementById("story-text");
    const photoUpload = document.getElementById("photo-upload");
    const storyList = document.getElementById("story-list");

    const forumForm = document.getElementById("forum-form");
    const forumTitle = document.getElementById("forum-title");
    const forumContent = document.getElementById("forum-content");
    const forumDiscussions = document.getElementById("forum-discussions");

    // Handle story submission
    storyForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const story = storyText.value;
        const photo = photoUpload.files[0];
        
        if (story) {
            const storyElement = document.createElement("div");
            storyElement.classList.add("story");

            const storyTextElement = document.createElement("p");
            storyTextElement.textContent = story;

            if (photo) {
                const photoElement = document.createElement("img");
                const reader = new FileReader();

                reader.onload = () => {
                    photoElement.src = reader.result;
                    photoElement.alt = "Story photo";
                    storyElement.appendChild(photoElement);
                };

                reader.readAsDataURL(photo);
            }

            storyElement.appendChild(storyTextElement);
            storyList.appendChild(storyElement);

            // Clear form after submission
            storyText.value = "";
            photoUpload.value = "";
        }
    });

    // Handle forum thread creation
    forumForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = forumTitle.value;
        const content = forumContent.value;

        if (title && content) {
            const forumThread = document.createElement("div");
            forumThread.classList.add("forum-thread");

            const forumTitleElement = document.createElement("h3");
            forumTitleElement.textContent = title;

            const forumContentElement = document.createElement("p");
            forumContentElement.textContent = content;

            forumThread.appendChild(forumTitleElement);
            forumThread.appendChild(forumContentElement);
            forumDiscussions.appendChild(forumThread);

            // Clear form after submission
            forumTitle.value = "";
            forumContent.value = "";
        }
    });
});
