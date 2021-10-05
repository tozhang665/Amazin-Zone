# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  price       :float            not null
#
class Product < ApplicationRecord
  validates :title, :description, :price, presence: true

  # validate :ensure_photo

  has_many :reviews,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Review

  has_many :inCart,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :CartItem

  has_one_attached :photo


  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end
