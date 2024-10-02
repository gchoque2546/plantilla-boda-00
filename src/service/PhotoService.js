export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'public/img/11.jpg',
                thumbnailImageSrc: 'public/img/11.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'public/img/12.jpg',
                thumbnailImageSrc: 'public/img/12.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'public/img/13.jpg',
                thumbnailImageSrc: 'public/img/13.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'public/img/14.jpg',
                thumbnailImageSrc: 'public/img/14.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'public/img/15.jpg',
                thumbnailImageSrc: 'public/img/15.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};
