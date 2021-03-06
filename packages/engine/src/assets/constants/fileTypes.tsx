// array containing audio file type
export const AudioFileTypes = ['.mp3', 'audio/mpeg']
//array containing video file type
export const VideoFileTypes = ['.mp4', 'video/mp4']
//array containing image files types
export const ImageFileTypes = ['.png', '.jpeg', '.jpg', '.gif', 'image/png', 'image/jpeg', 'image/gif']
//array containing model file type.
export const ModelFileTypes = ['.glb', 'model/gltf-binary']
//array contains arrays of all files types.
export const AllFileTypes = [...AudioFileTypes, ...VideoFileTypes, ...ImageFileTypes, ...ModelFileTypes]

//creatig comma saperated string contains all file types
export const AcceptsAllFileTypes = AllFileTypes.join(',')
