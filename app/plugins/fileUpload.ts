export default async function fileUpload({ storageRef, uploadFile, metaObject }) {
    try {
        await storageRef.put(uploadFile)
        const metadata = {
            customMetadata: metaObject
        };
        await storageRef.updateMetadata(metadata)
        const url = await storageRef.getDownloadURL()
        return {
            id: storageRef.meta,
            url,
        }
    } catch (error) {
        console.error(error)
    }
}