new Vue({
    el: '#app',
    data: {
        images: [
            'images/Image.jpeg',
            'images/Image 2.jpeg',
            'images/Image 3.jpeg',
            'images/Image 4.jpeg',
            'images/Image 5.jpeg',
            'images/Image 6.jpeg',
            'images/Image 7.jpeg',
            'images/Image 8.jpeg',
            'images/Image 9.jpeg',
            'images/Image 10.jpeg',
            'images/Image 11.jpeg',
            'images/Image 12.jpeg',
            'images/Image 13.jpeg',
            'images/Image 14.jpeg',
            'images/Image 15.jpeg',
            'images/Image 16.jpeg',
            'images/Image 17.jpeg',
            'images/Image 18.jpeg',
            'images/Image 19.jpeg',
            'images/Image 20.jpeg',
            'images/Image 21.jpeg',
            'images/Image 22.jpeg',
            'images/Image 23.jpeg',
            'images/Image 24.jpeg',
            'images/Image 25.jpeg',
            'images/Image 26.jpeg',
            'images/Image 27.jpeg',
            'images/A_comic_book-style_scene_of_a_rock_band._The_lead_.jpeg',
            'images/A_full-frame_comic_book_character_of_a_Jewish_woma.jpeg',
            'images/A_full-frame_comic_book_character_of_a_South_India.jpeg',
            'images/A_full-frame_comic_book_character_of_an_Indian_wom.jpeg',
            'images/6b0a5334c0ec83d48a87373614f266db.webp.jpeg',
            'images/a2f44b0798db0471eb2bc71a834aaf55.webp.jpeg'
        ],
        captions: [
            "Economica introduces smart claim filing to reduce processing costs!",
            "Analyzing medical claim trends to identify cost-saving opportunities.",
            "Negotiating with healthcare providers for better rates.",
            "Economica implements AI to detect fraudulent medical claims.",
            "Educating patients on preventive care to reduce long-term costs.",
            "Streamlining the claims process to cut administrative expenses.",
            "Economica helps a family navigate complex medical billing.",
            "Uncovering hidden fees in medical bills and fighting for fair pricing.",
            "Launching a wellness program to reduce overall healthcare costs.",
            "Economica leads a workshop on understanding medical insurance.",
            "Introducing telemedicine solutions to cut down on unnecessary visits.",
            "Partnering with local clinics for exclusive patient discounts.",
            "Economica fights against inflated pharmaceutical prices.",
            "Creating a mobile app for easy medical cost comparisons.",
            "Organizing a community health fair to promote preventive care.",
            "Economica advises on smart health savings accounts (HSAs).",
            "Implementing a 'second opinion' program to avoid unnecessary procedures.",
            "Helping a hospital reduce operational costs without compromising care.",
            "Economica uncovers a major loophole in medical coding for big savings.",
            "Introducing a 'round-up' feature for medical savings accounts.",
            "Negotiating better terms with health insurance companies.",
            "Economica hosts a live show about navigating medical bills.",
            "Developing AI to predict and prevent costly medical complications.",
            "Creating a network of cost-conscious healthcare providers.",
            "Economica celebrates with patients who avoided medical debt.",
            "Lobbying for transparent medical pricing regulations.",
            "Economica's medical cost-saving ideas go viral on social media.",
            "Economica joins forces with a medical research team to lower drug costs.",
            "Helping diverse communities access affordable healthcare options.",
            "Economica reaches out to different cultures with medical cost-saving wisdom.",
            "Empowering women with knowledge on gender-specific healthcare savings.",
            "Economica revolutionizes medical billing with blockchain technology.",
            "Economica explores innovative healthcare delivery models for cost reduction."
        ],
        selectedImage: null
    },
    methods: {
        showModal(index) {
            this.selectedImage = index;
            document.addEventListener('keydown', this.handleKeyDown);
        },
        hideModal() {
            this.selectedImage = null;
            document.removeEventListener('keydown', this.handleKeyDown);
        },
        handleKeyDown(event) {
            if (this.selectedImage === null) return;
            
            switch(event.key) {
                case 'ArrowLeft':
                    this.navigateImage(-1);
                    break;
                case 'ArrowRight':
                    this.navigateImage(1);
                    break;
                case 'Escape':
                    this.hideModal();
                    break;
            }
        },
        navigateImage(direction) {
            const newIndex = this.selectedImage + direction;
            if (newIndex >= 0 && newIndex < this.images.length) {
                this.selectedImage = newIndex;
            }
        }
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
});