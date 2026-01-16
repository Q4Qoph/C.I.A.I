'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  altText: string | null;
  displayOrder: number;
  isActive: boolean;
}

export default function GalleryManagementPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    altText: '',
    displayOrder: 0,
    isActive: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getGallery();
      setItems(response.data);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load gallery items',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (item?: GalleryItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        description: item.description || '',
        altText: item.altText || '',
        displayOrder: item.displayOrder,
        isActive: item.isActive,
      });
      setPreviewUrl(item.imageUrl);
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        description: '',
        altText: '',
        displayOrder: 0,
        isActive: true,
      });
      setPreviewUrl(null);
    }
    setImageFile(null);
    setDialogOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('altText', formData.altText);
      formDataToSend.append('displayOrder', formData.displayOrder.toString());
      formDataToSend.append('isActive', formData.isActive.toString());
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      if (editingItem) {
        await apiClient.updateGalleryItem(editingItem.id, formDataToSend);
        toast({
          title: 'Success',
          description: 'Gallery item updated successfully',
        });
      } else {
        await apiClient.createGalleryItem(formDataToSend);
        toast({
          title: 'Success',
          description: 'Gallery item created successfully',
        });
      }

      setDialogOpen(false);
      loadItems();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save gallery item',
        variant: 'destructive',
      });
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      await apiClient.deleteGalleryItem(id);
      toast({
        title: 'Success',
        description: 'Gallery item deleted successfully',
      });
      loadItems();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete gallery item',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gallery Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage images displayed in the gallery section
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit Gallery Item' : 'Add Gallery Item'}
              </DialogTitle>
              <DialogDescription>
                {editingItem
                  ? 'Update the gallery item details'
                  : 'Add a new image to the gallery'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="altText">Alt Text</Label>
                <Input
                  id="altText"
                  value={formData.altText}
                  onChange={(e) =>
                    setFormData({ ...formData, altText: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="displayOrder">Display Order</Label>
                <Input
                  id="displayOrder"
                  type="number"
                  value={formData.displayOrder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      displayOrder: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">
                  {editingItem ? 'New Image (optional)' : 'Image *'}
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required={!editingItem}
                />
                {previewUrl && (
                  <div className="mt-2">
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isActive: checked })
                  }
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={formLoading}>
                  {formLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : editingItem ? (
                    'Update'
                  ) : (
                    'Create'
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gallery Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No gallery items found
                  </TableCell>
                </TableRow>
              ) : (
                items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.imageUrl}
                        alt={item.altText || item.title}
                        width={50}
                        height={50}
                        className="rounded object-cover"
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.displayOrder}</TableCell>
                    <TableCell>
                      {item.isActive ? (
                        <span className="text-green-600">Active</span>
                      ) : (
                        <span className="text-gray-400">Inactive</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleOpenDialog(item)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
