class Club < ActiveRecord::Base
  attr_accessible :name, :plugs
  has_many :plugs
end
