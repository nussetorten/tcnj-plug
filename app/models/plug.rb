class Plug < ActiveRecord::Base
  attr_accessible :club, :desc, :title, :tags
  belongs_to :club
  has_many :tags
end
