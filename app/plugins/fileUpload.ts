export default function fileUpload() {
    const prefectureName = this.$route.params.prefectureName;
    const uid = this.user.uid;
    const storageRef = storage
        .ref(`${uid}/images/${prefectureName}/`)
        .child(this.fileName);
    try {
        await storageRef.put(this.uploadFile);
        const metadata = {
            customMetadata: {
                prefectureName: prefectureName
            }
        };
        await storageRef.updateMetadata(metadata);
        const url = await storageRef.getDownloadURL();
        console.log(url);
    } catch (error) {
        console.error(error);
    }
}