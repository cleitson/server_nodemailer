const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;


const getPhotos = async () => {
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
    const data = await response.json();
    return { status: "SUCCESS", data: data.data };
    
  } catch (error) {
    console.error(error);
    return { status: "BAD_REQUEST", data: "Erro ao buscar fotos do Instagram!" };
  }
};

const getProfile = async () => {
  try {
    const response = await fetch(`https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
    const data = await response.json();
    return { status: "SUCCESS", data };
    
  } catch (error) {
    console.error(error);
    return { status: "BAD_REQUEST", data: "Erro ao buscar perfil do Instagram!" };
  }
}

module.exports = {
  getPhotos,
  getProfile,
};