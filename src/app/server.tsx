export default async function updateUserProfile(formData: any) {
    'use server';

    // Simulate a database update
    console.log("updateUserProfile:", formData);
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');

}
