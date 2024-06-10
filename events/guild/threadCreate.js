//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * //MODIFIED BY PHV DEVELOPMENT. | https://disord.gg/cJkkCtMV99
 * @INFO
 * Read out LICENSE.MD
 * @INFO
//2021-2024
 * @INFO
 */
