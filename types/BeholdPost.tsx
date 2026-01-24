export interface BeholdSize {
    mediaUrl: string;
    width: number;
    height: number;
}

export interface BeholdPost {
    id: string;
    mediaUrl: string; // Orijinal Instagram URL'si
    permalink: string;
    caption?: string;
    mediaType: string;
    timestamp: string;
    sizes: {
        small: BeholdSize;
        medium: BeholdSize;
        large: BeholdSize;
        full: BeholdSize;
    };
}

export interface BeholdFeedResponse {
    username: string;
    profilePictureUrl: string;
    website: string;
    posts: BeholdPost[]; // Map yapacağımız asıl yer burası
}