# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord


  #SPIRE
  attr_reader :password
  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 4, allow_nil: true }
  after_initialize :ensure_session_token


  def self.find_by_credentials(email,password)
    user = User.find_by(email:email)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token = SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    update!(session_token: SecureRandom::urlsafe_base64)
    session_token
  end

end
