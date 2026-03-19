import User from "../models/UserModel.js";

export const loginUser = async (req, res) => {
  try {
    // req.auth is populated by clerkMiddleware
    const clerkUserId = req.auth.userId;
    
    if (!clerkUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name, email, picture } = req.body;

    let user = await User.findOne({ auth0Id: clerkUserId });

    if (!user) {
      user = new User({
        auth0Id: clerkUserId, // Keeping the field name for now
        name: name || "User",
        email: email,
        picture: picture,
      });
      await user.save();
      
      return res.status(201).json({
        isNewUser: true,
        user,
      });
    }

    return res.json({
      isNewUser: false,
      user,
    });
  } catch (err) {
    console.error("Auth Controller Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
};

export const registerUser = loginUser; // For Clerk, they are effectively the same