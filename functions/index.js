const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

setGlobalOptions({maxInstances: 10});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await admin
          .firestore()
          .collection("books")
          .get();

      const count = snapshot.size;

      res.status(200).json({count});
    } catch (error) {
      logger.error("Error counting books:", error);
      res.status(500).json({error: "Error counting books"});
    }
  });
});
